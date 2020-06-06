<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormErrorIterator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpKernel\Exception\HttpException;

abstract class AbstractHGController extends AbstractController
{
    /**
     * @param Request $request
     *
     * @return mixed
     *
     * @throws HttpException
     */
    private function getJson(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new HttpException(400, 'Invalid json');
        }

        return $data;
    }

    /**
     * @param string $formType
     * @param $model
     * @return array|FormErrorIterator array of errors or empty array if form contains no error.
     */
    protected function handleFormRequest(string $formType, $model)
    {

        $form = $this->createForm($formType, $model);
        $form->submit($this->getJson($this->getCurrentRequest()));

        if ($form->isSubmitted() && $form->isValid()) {
            return [];
        }

        return $this->normalizeFormError($form);
    }

    public function normalizeFormError($form)
    {
        $errors = $form->getErrors(true, true);
        $data = [];

        foreach ($errors as $error) {
            $data[$error->getOrigin()->getName()][] = $error->getMessage();
        }

        return $data;
    }

    protected function getCurrentRequest(): Request
    {
        return $this->get('request_stack')->getCurrentRequest();
    }

    protected function getFlashBag(): FlashBagInterface
    {
        return $this->get('session')->getFlashBag();
    }
}