<?php

namespace App\ViewModel\Config;

class Metadata
{
    private $data = [];

    public function __construct()
    {
    }

    public function add(string $name, string $content) {
        $this->data[$name] = $content;
        return $this;
    }
}