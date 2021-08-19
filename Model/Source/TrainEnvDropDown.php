<?php

namespace Slanglabs\RetailAssistant\Model\Source;

class TrainEnvDropDown implements \Magento\Framework\Data\OptionSourceInterface
{
    /**
     * Options getter
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [['value' => "stage", 'label' => __('staging')], ['value' => "prod", 'label' => __('production')]];
    }
}
