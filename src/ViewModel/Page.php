<?php

namespace App\ViewModel;

class Page implements PageInterface
{
    public $title;
    public $metaData = [];
    public $scripts = [];
    public $template = 'base.html.twig';

    /**
     * Add page metadata
     *
     * @param string $name
     * @param string $content
     * @param array $additionalAttributes
     * @return Page
     */
    public function addMetaData(string $name, string $content, array $additionalAttributes = []): self {
        $attributes = array_merge([
            'name' => $name,
            'content' => $content
        ], $additionalAttributes);
        $this->metaData[$name] = $attributes;

        return $this;
    }

    public function getMetaData(): array {
        return $this->metaData;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     * @return Page
     */
    public function setTitle($title): self
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getTemplate(): string
    {
        return $this->template;
    }

    /**
     * @param string $template
     */
    public function setTemplate(string $template): void
    {
        $this->template = $template;
    }

    /**
     * @return array
     */
    public function getScripts(): array
    {
        return $this->scripts;
    }

    /**
     * @param array $scripts
     */
    public function setScripts(array $scripts): void
    {
        $this->scripts = $scripts;
    }
}