<?php

namespace App\Model;

const DISCOUNT_COST_RATE = .5;

class EnergyDiscount
{
    public function getData(int $itemCost, \App\Document\Blueprint $blueprint)
    {
        $discountCost = $blueprint->getValue() * DISCOUNT_COST_RATE;
        $sellPrice = $blueprint->getValue() * (1 - DISCOUNT_COST_RATE);
        $netDiscount = $itemCost + $discountCost - $sellPrice;

        return [
            'discountCost' => $discountCost,
            'sellPrice' => $sellPrice,
            'netDiscount' => $netDiscount,
            'energyPriceRatio' => $this->getEnergyPriceRatio($netDiscount, $blueprint)
        ];
    }


    private function getEnergyPriceRatio(int $netDiscount, \App\Document\Blueprint $blueprint): float
    {
        return $netDiscount / $blueprint->getDiscountEnergy();
    }
}