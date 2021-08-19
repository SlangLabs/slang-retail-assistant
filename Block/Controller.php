<?php

namespace Slanglabs\RetailAssistant\Block;

use Slanglabs\RetailAssistant\Block\SlangConfig;


class Controller extends \Magento\Framework\View\Element\Template
{
    /**
     * @param \Magento\Framework\View\Element\Template\Context $context,
     * @param SlangConfig $slangConfig
     * @param array $data
     */
    protected $slangConfig, $collectionFactory;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        SlangConfig $slangConfig,
        \Magento\Catalog\Model\ResourceModel\Category\CollectionFactory $collectionFactory,
        array $data = []
    ) {
        $this->slangConfig = $slangConfig;
        $this->collectionFactory = $collectionFactory;
        parent::__construct($context, $data);
    }

    public function getAPIKey()
    {
        return $this->slangConfig->getConfigValue('api_key');
    }

    public function getAssistantID()
    {
        return $this->slangConfig->getConfigValue('assistant_id');
    }

    public function getSubdomain()
    {
        return $this->slangConfig->getConfigValue('subdomain');
    }

    public function getLanguages()
    {
        return $this->slangConfig->getConfigValue('languages');
    }

    public function getEnv()
    {
        return $this->slangConfig->getConfigValue('env');
    }

    public function getEnableCategory()
    {
        $collection = $this->collectionFactory->create();
        $collection->addAttributeToSelect('name');
        $collection->addIsActiveFilter(true);
        // $collection->addLevelFilter(2);
        $arry = [];
        foreach ($collection as $category) {
            //TODO: Nested Subcategory selection.
            // $subCat = [];
            // $childCategory = $category->getChildrenCategories();
            // foreach ($childCategory as $subCategory) {
            //     $subCat[strtolower($subCategory->getName())] = $subCategory->getUrl();
            // }
            $arry[str_replace("&", "and", strtolower($category->getName()))] = $category->getUrl();
        }
        return $arry;
    }
}
