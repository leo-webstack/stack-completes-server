<?php

namespace App\Entity;

use App\Repository\UserFavoriteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserFavoriteRepository::class)
 */
class UserFavorite
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="json")
     */
    private $blueprints = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBlueprints(): ?array
    {
        return $this->blueprints;
    }

    public function setBlueprints(array $blueprints): self
    {
        $this->blueprints = $blueprints;

        return $this;
    }
}
