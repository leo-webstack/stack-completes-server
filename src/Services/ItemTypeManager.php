<?php


namespace App\Services;


use App\Entity\ItemType;
use App\Repository\ItemTypeRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;

class ItemTypeManager
{
    private $databaseManager;
    private $itemTypeRepository;

    public function __construct(EntityManagerInterface $databaseManager, ItemTypeRepository $itemTypeRepository)
    {
        $this->databaseManager = $databaseManager;
        $this->itemTypeRepository = $itemTypeRepository;
    }

    /**
     * Return the item type inserted into the database. If it already exist,
     *
     * @param string $itemTypeName
     * @return ItemType
     * @throws NonUniqueResultException
     */
    public function insertItemType(string $itemTypeName): ItemType {
        if (null === $itemType = $this->itemTypeRepository->itemTypeExist($itemTypeName)) {
            $itemType = new ItemType();
            $itemType->setName($itemTypeName);

            $this->databaseManager->persist($itemType);
            $this->databaseManager->flush();
        }

        return $itemType;
    }
}