define([], function(){
        "use strict";
        return function(config) {
            SlangRetailAssistant.init({
              assistantID: config.assistantID,
              apiKey: config.apiKey,
              requestedLocales: config.languages.split(","),
              environment: config.env
            });
            

            var SubdomainMapping = {
              "grocery": SlangRetailAssistant.AssistantSubdomains.GROCERY,
              "pharmacy": SlangRetailAssistant.AssistantSubdomains.PHARMACY,
              "custom": SlangRetailAssistant.AssistantSubdomains.CUSTOM
            }
            
            SlangRetailAssistant.setAppDefaultSubDomain(
              SubdomainMapping[config.subdomain]
            );
            SlangRetailAssistant.ui.show();

            SlangRetailAssistant.setAction({
              onSearch: (searchInfo, searchUserJourney) => {
                const variantStr = searchInfo.item.variants? searchInfo.item.variants.join(" "): "";
                const brand = searchInfo.item.brand? searchInfo.item.brand: "";
                const productType = searchInfo.item.productType? searchInfo.item.productType: "";
                const searchString = brand + " " + productType + " " + variantStr;
                const category = searchInfo.item.category;
                const subcategory = searchInfo.item.subcategory;

                if(searchString.trim().length === 0) {
                  let navigationLink = null;

                  if(subcategory !== null) {
                    const subcategoryLower = subcategory.toLowerCase().replace("&", "and");
                    if(subcategoryLower in config.category) {
                    navigationLink = config.category[subcategoryLower];
                  } 
                 }
                 else if(category !== null) { 
                  const categoryLower = category.toLowerCase().replace("&", "and");
                   if(categoryLower in config.category) {
                    navigationLink = config.category[categoryLower];
                  }
                }

                  if(navigationLink !== null) {
                    window.location.href = navigationLink;
                    searchUserJourney.setSuccess();
                    return searchUserJourney.AppStates.SEARCH_RESULTS;
                  }
                  searchUserJourney.setItemNotSpecified();
                  return searchUserJourney.AppStates.SEARCH_RESULTS;
                }
                window.location.href = config.baseUrl + "catalogsearch/result/?q=product".replace("product", searchString);
                searchUserJourney.setSuccess();
                return searchUserJourney.AppStates.SEARCH_RESULTS;
              },
              onNavigation: (navigationInfo, navigationUserJourney) => {
                function navigationSuccess() {
                  navigationUserJourney.setNavigationSuccess();
                  return navigationUserJourney.AppState.NAVIGATION;
                }
                SlangRetailAssistant.AssistantUserJourneys.RETAIL_NAVIGATION;
                const target = navigationInfo.target
                if(target === null || target === undefined) {
                  navigationUserJourney.setTargetNotSpecified();
                  return navigationUserJourney.AppState.NAVIGATION;
                }
                const targetStr = target.toLowerCase().replace("&", "and")
                // standard target supported by Slang.
                switch(targetStr) {
                    case "home": {
                      window.location.href = config.baseUrl;
                      return navigationSuccess();
                    }
                    case "back": {
                      window.history.back();
                      return navigationSuccess();
                    }
                    case "cart": {
                      window.location.href = config.cartURL;
                      return navigationSuccess();
                    }
                    case "checkout": {
                      window.location.href = config.checkoutURL;
                      return navigationSuccess();
                    }
                  }
                  if (targetStr in config.category) {
                    window.location.href = config.category[targetStr];
                    return navigationSuccess();
                  }
                  navigationUserJourney.setNavigationFailure();
                  return navigationUserJourney.AppState.NAVIGATION;
              },
              onAssistantError: (error) => {
                console.error(error)
              }
        });
      }
    }
)