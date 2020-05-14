<?php

namespace App\Services;

use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;

class Spreadsheet
{
    private $filePath;
    private $projectDir;

    public function __construct(string $projectDir)
    {
        $this->projectDir = $projectDir;
    }

    /**
     * @param string $filePath
     * @return array
     * @throws Exception
     */
    public function load(string $filePath = '/data/ts_data.xlsx') {

        $inputFileType = 'Xlsx';
        $this->filePath = $filePath;

        /**  Create a new Reader of the type defined in $inputFileType  **/
        $reader = IOFactory::createReader($inputFileType);

        /**  Advise the Reader that we only want to load cell data  **/
        $reader
            ->setReadDataOnly(true)
            ->setLoadSheetsOnly('Blueprints');

        /**  Load $inputFileName to a Spreadsheet Object  **/
        $spreadsheet = $reader->load($this->filePath);

        $blueprints = $spreadsheet->getSheetByName('Blueprints');

        $worksheetData = $blueprints->rangeToArray('A1:L375');

        $header = reset($worksheetData);
        $header = array_map(function($v) {
            $v = strtolower($v);
            return str_replace(' ', '_', $v);
        }, $header);

        $result = [];
        for($i = 1; $i < count($worksheetData); $i++) {
            $result[] = array_combine($header, $worksheetData[$i]);
        }

        return $result;
    }


}