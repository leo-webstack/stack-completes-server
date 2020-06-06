<?php

namespace App\Controller\Web\ShopTitans;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation;

class ShopTitansController extends AbstractController
{
    /**
     * @Annotation\Route("/shop-titans/{page}", name="st.index", methods={"GET"})
     * @return Response
     */
    public function startApp(string $page = '') {
        return $this->render('shop-titans-app.html.twig');
    }
}