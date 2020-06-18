<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Potager;
use App\User;

class PotagerController extends Controller
{
    /**
     * Permet d'afficher tout les potagers
     * Manipuler le json en javascript pour afficher les plus populaire sur l'accueil
     */
    public function show(){
        $potagerToShow = Potager::all();
        $result = [];
        foreach ($potagerToShow as $potager) {
            $item = [
                "Prenom" => $potager->user->prenom,
                "Nom" => $potager->user->nom,
                "id" => $potager->id,
                "user_id" => $potager->user_id,
                "rating" => $potager->rating,
                "vote" => $potager->vote,
                "image" => $potager->image
        ];
            array_push($result, $item);
        }
        return $result;
    }

    /**
     * Permet de créer le potager après la création d'un utilisateur. 
     * La request et le ID de l'utilisateur créer précédement
     * Fonction obsolete. Voir create dans UserController.php
     * 
     *     public function create(Request $request){
     *   $potager = new Potager;
     *   $potager->user_id = $request->userid;
     *   $potager->rating = 0;
     *   $potager->vote = 0;
     *
     *   $success = $potager->save();
     * 
     *   return [
     *      'success' => $success
     *   ];
     * }
     * 
     */
 

    /**
     * Permet d'updater le rating du potager et d'augmenter le nombre de vote de 1
     * Faire la validation du rating entre 1 et 5 en javascript avant d'envoyer la request
     * Besoin du ID de potager
     * Return le json du potager updater au besoin
     */
    public function addRating(Request $request, $id) {
        $potager = Potager::find($id);
        $rating = $potager->rating;
        $potager->rating = $rating + $request->rating;
        $potager->vote = $potager->vote + 1;

        $success = $potager->save();
        
        return $potager;
    }

    /**
     * Permet d'update les informations du potager (l'image utiliser par le potager)
     */
    public function editPotager(Request $request, $id) {
        $potager = Potager::find($id);

        if ($request->image != null) {
            $potager->image = $request->image;
        } else {
            $potager->image = $potager->image;
        }

        $success = $potager->save();
        $result = [];

        $item = [
            "Prenom" => $potager->user->prenom,
            "Nom" => $potager->user->nom,
            "id" => $potager->id,
            "user_id" => $potager->user_id,
            "rating" => $potager->rating,
            "vote" => $potager->vote,
            "image" => $potager->image
        ];
        array_push($result, $item);
        return $result;
    }

    /**
     * IMPORTANT: S'assurer en javascript que l'utilisateur soit administrateur pour utiliser ce endpoint
     * À FAIRE: Validation en PHP que le user qui utilise ce endpoint soit un admin.
     * Permet de supprimer le potager d'un utilisateur lors de la suppression du compte de celui-ci
     * Supprimer les produits dans le potager avant de supprimer le potager.
     * Supprimer le potager avant de supprimer l'utilisateur
     * Besoin du id de l'utilisateur
     */
    public function delete($id) {
        $potager = Potager::where('user_id', $id)->first();

        if ($potager != null){
            $success = $potager->delete();
        } else {
            $success = false;
        }
        return [
            "success" => $success
        ];
    }
}
