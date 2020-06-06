<?php

namespace App\Controller\Web;

use App\Form\ImportForm;
use App\Services\BlueprintManager;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
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
        return $this->redirectToRoute('st.index');
    }

    /**
     * @Annotation\Route("/import", name="import", methods={"GET", "POST"})
     * @param Request $request
     * @param BlueprintManager $blueprintManager
     * @return Response
     */
    public function import(Request $request, BlueprintManager $blueprintManager)
    {
        $form = $this->createForm(ImportForm::class, []);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            /** @var UploadedFile $uploadFile */
            $uploadFile = $data['upload'];
            $truncate = $data['truncate'];

            if ($truncate) {
                $blueprintManager->truncate();
            }

            $path = $uploadFile->getPathname();
            return new JsonResponse($blueprintManager->importXlsx($path));
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