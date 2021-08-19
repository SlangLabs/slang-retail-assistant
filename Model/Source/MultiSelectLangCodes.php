<?php

namespace Slanglabs\RetailAssistant\Model\Source;

class MultiSelectLangCodes implements \Magento\Framework\Data\OptionSourceInterface
{
    /**
     * Options getter
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => "en-IN", 'label' => __('English(India)')]
        ];
    }
}
