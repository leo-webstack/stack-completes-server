<?php

namespace App\Controller\Api;

use App\Config\HGMessageType;
use App\Controller\AbstractHGController;
use App\Entity\User;
use App\Form\UserRegistration;
use App\Services\UserManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractHGController
{
    /**
     * @Route("/login", name="api_login", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function login(Request $request)
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->json([
            'apiToken' => 'TODO',
            'username' => $user->getUsername(),
            'roles' => $user->getRoles()
        ]);
    }

    /**
     * @Route("/user", name="user.register", methods={"POST"})
     * @param UserManager $userManager
     * @return JsonResponse
     */
    public function register(UserManager $userManager)
    {
        $user = $userManager->createUser();
        $errors = $this->handleFormRequest(UserRegistration::class, $user);

        if (empty($errors)) {
            return $this->json($errors);
        }

        $userManager->updateUser($user);

        $this->addFlash(HGMessageType::SUCCESS, 'User has been registered successfully.');

        return $this->json([
            '@type' => 'messages',
            '[data]' => $this->getFlashBag()->all()
        ]);
    }
}