<?php

namespace App\Controller\Web\ShopTitans;

use App\Form\ImportForm;
use App\Services\BlueprintManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation;

class ShopTitansController extends AbstractController
{
    /**
     * @Annotation\Route("/shop-titans/{page}", name="st.index", methods={"GET"})
     * @return Response
     */
    public function startApp(string $page = '')
    {
        return $this->render('shop-titans-app.html.twig');
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
}