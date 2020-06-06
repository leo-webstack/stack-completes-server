<?php

namespace App\Controller\Api;

use App\Config\HGMessageType;
use App\Controller\AbstractHGController;
use App\Entity\User;
use App\Form\UserRegistration;
use App\Services\UserManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractHGController
{
    /**
     * @Route("/login", name="login", methods={"POST"})
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $user = $this->getUser();

        $this->json([
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