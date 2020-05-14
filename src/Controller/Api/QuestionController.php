<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class QuestionController extends AbstractController
{

    /**
     * @Annotation\Route("/api/v1/question/blueprint", name="api.question.blueprint", methods={"POST"})
     */
    public function postBluePrintQuestion(Request $request) {

    }

}