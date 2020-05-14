<?php

namespace App\Controller\Web;

use App\Document\Blueprint;
use App\Form\ImportForm;
use App\Services\DocumentBulkManager;
use App\Services\Spreadsheet;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\MongoDBException;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation;
use Symfony\Component\Serializer\SerializerInterface;

class DefaultController extends AbstractController
{
    /**
     * @param Spreadsheet $spreadsheet
     * @return Response
     * @throws Exception
     */
    public function index(Spreadsheet $spreadsheet)
    {
        return $this->render('base.html.twig', [
            'data' => $spreadsheet->load()
        ]);
    }

    /**
     * @Annotation\Route("/import", name="import", methods={"GET", "POST"})
     * @param Request $request
     * @param Spreadsheet $spreadsheet
     * @return Response
     * @throws Exception
     * @throws MongoDBException
     */
    public function import(Request $request, Spreadsheet $spreadsheet, DocumentManager $documentManager, DocumentBulkManager $documentBulkManager)
    {
        $form = $this->createForm(ImportForm::class, []);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            /** @var UploadedFile $uploadFile */
            $uploadFile = $data['upload'];

            $path = $uploadFile->getPathname();

            $result = $spreadsheet->load($path);

            $hydrator = $documentManager->getHydratorFactory();

            $documentBulkManager->persist($result, function ($item) use ($hydrator) {
                $blueprint = new Blueprint();
                $hydrator->hydrate($blueprint, $item);

                return $blueprint;
            });

            return new JsonResponse($result);
        }

        return $this->render('base.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Annotation\Route("/phpinfo", name="php_info", methods={"GET"})
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