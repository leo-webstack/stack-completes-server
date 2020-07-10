<?php

namespace App\Controller\Web;

use App\Services\PublicFileManager;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation;

class DefaultController extends AbstractController
{
    /**
     * @return Response
     * @throws Exception
     */
    public function index()
    {
        return $this->render('portfolio-app.html.twig');
    }

    /**
     * @Annotation\Route("/files/{filename}", name="file.download", methods={"GET"})
     * @param string $filename
     * @param PublicFileManager $fileManager
     * @return Response
     */
    public function download(string $filename, PublicFileManager $fileManager)
    {
        return $fileManager->streamFile($filename);
    }

    /**
     * @Annotation\Route("/dev/phpinfo", name="php_info", methods={"GET"})
     */
    public function phpInfo()
    {
        ob_start();
        phpinfo();
        $str = ob_get_contents();
        ob_get_clean();

        return new Response($str);
    }
}