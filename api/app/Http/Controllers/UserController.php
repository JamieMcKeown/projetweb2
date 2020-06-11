<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    /**
     * Pour obtenir la liste de tout les utilisateurs
     * Formater en javascript pour obtenir les 4 meilleurs jardinier pour la page d'accueil
     */
    public function show(){
        $userToShow = User::all();
        return $userToShow;
    }

    /**
     * Utilisé pour vérifier si le email de l'utilisateur existe lors de la validation du login
     * Peut aussi être utilisé lors de la validation de l'inscription en javascript pour voir si le email existe déja
     */
    public function getWithEmail($email){
        $user = User::where('email', $email)->first();
        return $user;
    }

    /**
     * Créer un utilisateur et retourne un json avec l'utilisateur créer
     * Utilisé le id fourni dans le json pour ensuite créer le potager
     */
    public function create(Request $request) {
        $user = new User();
        $user->prenom = $request->prenom;
        $user->nom = $request->nom;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->rating = 0;
        $user->vote = 0;
        $user->numero_porte = $request->numero_porte;
        $user->ville = $request->ville;
        $user->code_postal = $request->code_postal;
        $user->admin = 0;
        $user->question_secrete = $request->question_secrete;
        $user->reponse = $request->reponse;

        $success = $user->save();

        return $user;
    }

    /**
     * Permet d'updater le rating du user et d'augmenter le nombre de vote de 1
     * Faire la validation du rating entre 1 et 5 en javascript avant d'envoyer la request
     * Besoin du ID du user
     * Return le json du user updater au besoin
     */
    public function addRating(Request $request, $id){
        $user = User::find($id);
        $rating = $user->rating;
        $user->rating = $rating + $request->rating;
        $user->vote = $user->vote + 1;
        
        $success = $user->save();

        return $user;
    }

    /**
     * IMPORTANT: S'assurer en javascript que l'utilisateur soit administrateur pour utiliser ce endpoint
     * À FAIRE: Validation en PHP que le user qui utilise ce endpoint soit un admin.
     * Permet de supprimer un utilisateur.
     * Ordre de suppression devrait être produit -> potager -> utilisateur
     * S'assurer de supprimer les produits dans le potagers.
     * S'assurer de supprimer le potager de l'utilisateur.
     */
    public function delete($id) {
        $user = User::find($id);

        if($user != null){
            $success = $user->delete();
        } else {
            $success = false;
        }

        return [
            "success" => $success
        ];
    }
}
