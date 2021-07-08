define([
    "Slanglabs_RetailAssistant/js/slang",
], function(){
        "use strict";
        return function(config) {
            SlangRetailAssistant.init({
              assistantID: config.assistantID,
              apiKey: config.apiKey,
              requestedLocales: config.languages.split(",")
            });

            var SubdomainMapping = {
              "grocery": SlangRetailAssistant.AssistantSubdomains.GROCERY,
              "pharmacy": SlangRetailAssistant.AssistantSubdomains.PHARMACY
            }
            
            SlangRetailAssistant.setAppDefaultSubDomain(
              SubdomainMapping[config.subdomain]
            );

            SlangRetailAssistant.ui.show();

            SlangRetailAssistant.setAction({
              onSearch: (searchInfo, searchUserJourney) => {
                searchUserJourney.setSuccess();
                var product = searchInfo.item.productType;
                window.location.href = config.baseUrl + "catalogsearch/result/?q=product".replace("product", product);
                return searchUserJourney.AppStates.SEARCH_RESULTS;
              },
              onNavigation: (navigationInfo, navigationUserJourney) => {
                  switch(navigationInfo.target) {
                    case "home": {
                      window.location.href = config.baseUrl;
                      break;
                    }
                    case "back": {
                      window.history.back();
                      break;
                    }
                    case "cart": {
                      window.location.href = config.cartURL;
                      break;
                    }
                    case "checkout": {
                      window.location.href = config.checkoutURL;
                      break;
                    }
                  }
                  SlangRetailAssistant.AssistantUserJourneys.RETAIL_NAVIGATION;
                  navigationUserJourney.setNavigationSuccess();
                  return navigationUserJourney.AppState.NAVIGATION;
              },
              onAssistantError: (error) => {
                console.error(error)
              }
        })
      }
    }
)