<?php

namespace App\Services;

use App\Document\Blueprint;
use Doctrine\ODM\MongoDB\DocumentManager;

class BlueprintManager
{

    protected $documentManager;
    protected $bulkManager;
    protected $itemTypeManager;
    protected $spreadsheet;

    public function __construct(DocumentManager $documentManager,
                                DocumentBulkManager $bulkManager,
                                ItemTypeManager $itemTypeManager,
                                Spreadsheet $spreadsheet
    )
    {
        $this->documentManager = $documentManager;
        $this->bulkManager = $bulkManager;
        $this->itemTypeManager = $itemTypeManager;
        $this->spreadsheet = $spreadsheet;
    }

    public function truncate() {
        $collection = $this->documentManager->getDocumentCollection(Blueprint::class);
        return $collection->drop();
    }

    public function importXlsx(string $xlsxFilePath) {
        $result = $this->spreadsheet->load($xlsxFilePath);
        $hydrator = $this->documentManager->getHydratorFactory();

        $this->bulkManager->persist($result, function ($item) use ($hydrator) {
            $blueprint = new Blueprint();
            $hydrator->hydrate($blueprint, $item);
            $blueprint->setMarketValue(0);

            $this->itemTypeManager->insertItemType($blueprint->getType());

            return $blueprint;
        });

        return $result;
    }
}