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
    protected $slangConfig;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        SlangConfig $slangConfig,
        array $data = []
    ) {
        $this->slangConfig = $slangConfig;
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
}
