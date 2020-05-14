<?php

namespace App\Services;

use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;

class DocumentBulkManager
{
    private $documentManager;

    public function __construct(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
    }

    /**
     * Clear and flush all objects currently managed by Doctrine's document manager.
     *
     * @throws MongoDBException
     */
    private function clear()
    {
        $this->documentManager->flush();
        $this->documentManager->clear();
    }

    /**
     * @param iterable $items , list of items to be passed on each loop to the callable
     * @param callable $callback , callback function to execute on each item, should return a Document object
     * @param int $size , the size to clear the document manager
     * @throws MongoDBException
     */
    public function persist(iterable $items, callable $callback, int $size = 20)
    {
        $count = 0;

        foreach ($items as $item) {
            $document = $callback($item);
            $this->documentManager->persist($document);

            $count++;

            if ($count >= $size) {
                $this->clear();
                $count = 0;
            }
        }

        if ($count > 0) {
            $this->clear();
        }
    }
}