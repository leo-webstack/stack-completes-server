<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Mime\FileinfoMimeTypeGuesser;

class PublicFileManager
{
    private $projectDir;

    public function __construct(string $projectDir)
    {
        $this->projectDir = $projectDir;
    }

    public function streamFile(string $filename): Response {
        $filePath = sprintf('%s/public/files/%s', $this->projectDir, $filename);

        if (!file_exists($filePath)) {
            throw new NotFoundHttpException();
        }

        $inputStream = fopen($filePath, 'r');

        $response = new StreamedResponse(function () use ($inputStream) {
            $outputStream = fopen('php://output', 'wb');
            stream_copy_to_stream($inputStream, $outputStream);
        });

        $mimeTypeGuesser = new FileinfoMimeTypeGuesser();
        $streamMetaData = stream_get_meta_data($inputStream);
        $uri = $streamMetaData['uri'];

        if ($contentType = $mimeTypeGuesser->guessMimeType($uri)) {
            $disposition = HeaderUtils::makeDisposition(HeaderUtils::DISPOSITION_ATTACHMENT, $filename);

            $response->headers->set('Content-Type', $contentType);
            $response->headers->set('Content-Disposition', $disposition);
            return $response;
        }

        return $response;
    }
}