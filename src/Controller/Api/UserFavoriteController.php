<?php

namespace App\Controller\Api;

use App\Controller\AbstractHGController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class UserFavoriteController extends AbstractHGController
{
    /**
     * @Route("/user/favorite", name="user.favorite", methods={"GET"})
     * @return AccessDeniedException|JsonResponse
     */
    public function getFavoriteBlueprint()
    {
        if (null === $user = $this->getCurrentUser()) {
            return $this->createAccessDeniedException();
        }

        return $this->json($user->getFavorite()->getBlueprints());
    }
}