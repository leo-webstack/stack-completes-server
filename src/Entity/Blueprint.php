<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\BlueprintRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ORM\Entity(repositoryClass=BlueprintRepository::class)
 * @ApiFilter(OrderFilter::class, properties={"merchant_xp"}, arguments={"orderParameterName"="order"})
 * @ApiFilter(SearchFilter::class, properties={"tier": "exact", "type": "exact"})
 */
class Blueprint
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $market_value;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $document_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMarketValue(): ?string
    {
        return $this->market_value;
    }

    public function setMarketValue(string $market_value): self
    {
        $this->market_value = $market_value;

        return $this;
    }

    public function getDocumentId(): ?string
    {
        return $this->document_id;
    }

    public function setDocumentId(?string $document_id): self
    {
        $this->document_id = $document_id;

        return $this;
    }
}
