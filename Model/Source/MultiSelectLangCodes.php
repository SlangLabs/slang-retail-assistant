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
            ['value' => "en-IN", 'label' => __('English(India)')],
            ['value' => "en-US", 'label' => __('English(USA)')],
            ['value' => "hi-IN", 'label' => __('HINDI')],
            ['value' => "kn-IN", 'label' => __('Kannada')],
            ['value' => "ml-IN", 'label' => __('Malayalam')],
        ];
    }
}
