<?php

namespace Slanglabs\RetailAssistant\Block;

use Magento\Store\Model\ScopeInterface;

class SlangConfig extends \Magento\Framework\App\Helper\AbstractHelper
{
    const XML_PATH_SLANG_CONFIG = 'slang_config/';

    public function getConfigValue($fieldId, $storeCode = null)
    {
        return $this->scopeConfig->getValue(self::XML_PATH_SLANG_CONFIG . 'general/' . $fieldId, ScopeInterface::SCOPE_STORE, $storeCode);
    }
}
