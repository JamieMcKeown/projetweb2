<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Potager;

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
     * Créer un utilisateur et son potager 
     * puis retourne un json avec l'utilisateur créer
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

        $potager = new Potager();
        $potager->user_id = $user->id;
        $potager->rating = 0;
        $potager->vote = 0;

        $potager->save();

        $result = [];
        array_push($result, $user, $potager);
        return $result;
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
     * Permet d'update les informations de l'utilisateur selon le ID fourni.
     * Pour update mdp ou reponse secrete utiliser les fonctions editUserPassword() ou editUserSecret()
    */
    public function editUser(Request $request, $id){
        $user = User::find($id);
        if ($request->prenom != null){
            $user->prenom = $request->prenom;
        } else {
            $user->prenom = $user->prenom;
        }

        if ($request->nom != null) {
            $user->nom = $request->nom;
        } else {
            $user->nom = $user->nom;
        }

        if ($request->email != null) {
            $user->email = $request->email;
        } else {
            $user->email = $user->email;
        }

        if ($request->numero_porte != null) {
            $user->numero_porte = $request->numero_porte;
        } else {
            $user->numero_porte = $user->numero_porte;
        }
 
        if ($request->ville != null) {
            $user->ville = $request->ville;
        } else {
            $user->ville = $user->ville;
        }

        if ($request->code_postal != null) {
            $user->code_postal = $request->code_postal;
        } else {
            $user->code_postal = $user->code_postal; 
        }

        if ($request->image != null ) {
            $user->image = $request->image;
        } else {
            $user->image = $user->image;
        }

        if ($request->bio != null) {
            $user->bio = $request->bio;
        } else {
            $user->bio = $user->bio;
        }

        $success = $user->save();

        return $user;
    }

    /** 
     * Permet d'update le password de l'utilisateur selon le ID fourni.
     * Pour update les information general ou reponse secrete utiliser les fonctions editUser() ou editUserSecret()
    */
    public function editUserPassword(Request $request, $id){
        $user = User::find($id);

        if ($request->password != null && $request->password != $user->password) {
            $user->password = $request->password;
        } else {
            $success = false;
        }

        $success = $user->save();

        return $user;
    }

    /** 
     * Permet d'update la reponse secrete de l'utilisateur selon le ID fourni.
     * Pour update les information general ou mdp utiliser les fonctions editUser() ou editUserPassword()
    */
    public function editUserSecret(Request $request, $id) {
        $user = User::find($id);

        if ($request->reponse != null) {
            $user->reponse = $request->reponse;
        } else {
            $user->reponse = $user->reponse;
        }

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
