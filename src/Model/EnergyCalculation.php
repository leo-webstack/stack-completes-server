<?php

namespace App\Model;

use App\Entity\Blueprint;

class EnergyCalculation
{
    private $blueprint;
    private $discountEnergyModel;
    private $discountEnergy;

    public function __construct(\App\Document\Blueprint $blueprint)
    {
        $this->blueprint = $blueprint;
        $this->discountEnergyModel = new EnergyDiscount();
    }

    public function getDiscountEnergy(float $itemCost) {
        return $this->discountEnergyModel->getData($itemCost, $this->blueprint);
    }
}
