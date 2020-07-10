<?php

namespace App\Document;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;
use ApiPlatform\Core\Bridge\Doctrine\MongoDbOdm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\MongoDbOdm\Filter\SearchFilter;

/**
 * Class Blueprint
 * @package App\Document
 * @ApiResource
 * @ODM\Document
 * @ApiFilter(OrderFilter::class, properties={"merchant_xp"}, arguments={"orderParameterName"="order"})
 * @ApiFilter(SearchFilter::class, properties={"id": "exact", "tier": "exact", "type": "iexact"})
 */
class Blueprint
{
    /**
     * @ODM\Id
     */
    protected $id;

    /**
     * @ODM\Field(type="string")
     */
    protected $name;

    /**
     * @ODM\Field(type="string")
     */
    protected $type;

    /**
     * @ODM\Field(type="string")
     */
    protected $unlock_prerequisite;

    /**
     * @ODM\Field(type="string")
     */
    protected $research_scrolls;

    /**
     * @ODM\Field(type="string")
     */
    protected $tier;

    /**
     * @ODM\Field(type="float")
     */
    protected $value;

    /**
     * @ODM\Field(type="float")
     */
    protected $crafting_time;

    /**
     * @ODM\Field(type="float")
     */
    protected $merchant_xp;

    /**
     * @ODM\Field(type="float")
     */
    protected $worker_xp;

    /**
     * @ODM\Field(type="float")
     */
    protected $market_value;

    /**
     * @ODM\Field(type="int")
     */
    protected $discount_energy;

    /**
     * @ODM\Field(type="int")
     */
    protected $surcharge_energy;

    /**
     * @ODM\Field(type="int")
     */
    protected $suggest_energy;

    /**
     * @ODM\Field(type="int")
     */
    protected $speed_up_energy;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type): void
    {
        $this->type = strtoupper($type);
    }

    /**
     * @return mixed
     */
    public function getUnlockPrerequisite()
    {
        return $this->unlock_prerequisite;
    }

    /**
     * @param mixed $unlock_prerequisite
     */
    public function setUnlockPrerequisite($unlock_prerequisite): void
    {
        $this->unlock_prerequisite = $unlock_prerequisite;
    }

    /**
     * @return mixed
     */
    public function getResearchScrolls()
    {
        return $this->research_scrolls;
    }

    /**
     * @param mixed $research_scrolls
     */
    public function setResearchScrolls($research_scrolls): void
    {
        $this->research_scrolls = $research_scrolls;
    }

    /**
     * @return mixed
     */
    public function getTier()
    {
        return $this->tier;
    }

    /**
     * @param mixed $tier
     */
    public function setTier($tier): void
    {
        $this->tier = $tier;
    }

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param mixed $value
     */
    public function setValue($value): void
    {
        $this->value = $value;
    }

    /**
     * @return mixed
     */
    public function getCraftingTime()
    {
        return $this->crafting_time;
    }

    /**
     * @param mixed $crafting_time
     */
    public function setCraftingTime($crafting_time): void
    {
        $this->crafting_time = $crafting_time;
    }

    /**
     * @return mixed
     */
    public function getMerchantXp()
    {
        return $this->merchant_xp;
    }

    /**
     * @param mixed $merchant_xp
     */
    public function setMerchantXp($merchant_xp): void
    {
        $this->merchant_xp = $merchant_xp;
    }

    /**
     * @return mixed
     */
    public function getWorkerXp()
    {
        return $this->worker_xp;
    }

    /**
     * @param mixed $worker_xp
     */
    public function setWorkerXp($worker_xp): void
    {
        $this->worker_xp = $worker_xp;
    }

    /**
     * @return mixed
     */
    public function getMarketValue()
    {
        return $this->market_value;
    }

    /**
     * @param mixed $market_value
     */
    public function setMarketValue($market_value): void
    {
        $this->market_value = $market_value;
    }

    /**
     * @return mixed
     */
    public function getDiscountEnergy()
    {
        return $this->discount_energy;
    }

    /**
     * @param mixed $discount_energy
     */
    public function setDiscountEnergy($discount_energy): void
    {
        $this->discount_energy = $discount_energy;
    }

    /**
     * @return mixed
     */
    public function getSurchargeEnergy()
    {
        return $this->surcharge_energy;
    }

    /**
     * @param mixed $surcharge_energy
     */
    public function setSurchargeEnergy($surcharge_energy): void
    {
        $this->surcharge_energy = $surcharge_energy;
    }

    /**
     * @return mixed
     */
    public function getSuggestEnergy()
    {
        return $this->suggest_energy;
    }

    /**
     * @param mixed $suggest_energy
     */
    public function setSuggestEnergy($suggest_energy): void
    {
        $this->suggest_energy = $suggest_energy;
    }

    /**
     * @return mixed
     */
    public function getSpeedUpEnergy()
    {
        return $this->speed_up_energy;
    }

    /**
     * @param mixed $speed_up_energy
     */
    public function setSpeedUpEnergy($speed_up_energy): void
    {
        $this->speed_up_energy = $speed_up_energy;
    }

    public function getRatioValueXp(): float
    {
        return $this->market_value > 0 ? $this->merchant_xp / $this->market_value : 0;
    }

    public function getEstimatedMarketValue(): float
    {
        return $this->getValue() * 1.1;
    }

    public function getRatioSpeedUpTime(): float
    {
        return $this->crafting_time > 0 ? $this->speed_up_energy / $this->crafting_time : 0;
    }
}