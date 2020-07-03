<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recolte;
use App\Typerecolte;
use App\Potager;
use App\User;

class RecolteController extends Controller
{
    public function create(Request $request) {
        $recolte = new Recolte();
        $recolte->typerecolte_id = $request->typerecolte_id;
        $recolte->potager_id = $request->potager_id;
        $recolte->rating = 0;
        $recolte->vote = 0;
        $recolte->quantite = $request->quantite;
        $recolte->description = $request->description;

        $success = $recolte->save();

        return $recolte;
    }

    public function show(){
        $recoltes = Recolte::all();
        $result = [];
        foreach ($recoltes as $recolte) {
            $recolteID = $recolte->id;
            $potagerID = $recolte->potager->id;
            $prenom = $recolte->potager->user->prenom;
            $nom = $recolte->potager->user->nom;
            $rating = $recolte->rating;
            $vote = $recolte->vote;
            $type = $recolte->typerecolte->nom;
            $typeID = $recolte->typerecolte->id;
            $image = $recolte->image;
            $qte = $recolte->quantite;
            $description = $recolte->description;
            array_push($result, [
                "recolte_id" => $recolteID,
                "quantite" => $qte,
                "description" => $description,
                "potager_id" => $potagerID,
                "potager_owner_prenom" => $prenom,
                "potager_owner_nom" => $nom,
                "type" => $type,
                "type_id" => $typeID,
                "rating" => $rating,
                "vote" => $vote,
                "image" => $image,
                
            ]);
        }

        return $result;
    }

    public function findByOwner($id){
        $recoltes = Recolte::where("potager_id", $id)->get();
        $result = [];
        foreach ($recoltes as $recolte) {
            $recolteID = $recolte->id;
            $potagerID = $recolte->potager->id;
            $prenom = $recolte->potager->user->prenom;
            $nom = $recolte->potager->user->nom;
            $rating = $recolte->rating;
            $vote = $recolte->vote;
            $type = $recolte->typerecolte->nom;
            $typeID = $recolte->typerecolte->id;
            $image = $recolte->image;
            $qte = $recolte->quantite;
            $description = $recolte->description;
            array_push($result, [
                "recolte_id" => $recolteID,
                "quantite" => $qte,
                "description" => $description,
                "potager_id" => $potagerID,
                "potager_owner_prenom" => $prenom,
                "potager_owner_nom" => $nom,
                "type" => $type,
                "type_id" => $typeID,
                "rating" => $rating,
                "vote" => $vote,
                "image" => $image,
                
            ]);
        }

        return $result;
    }

    public function findByType($id) {
        $recoltes = Recolte::where("typerecolte_id", $id)->get();
        $result = [];
        foreach ($recoltes as $recolte) {
            $recolteID = $recolte->id;
            $potagerID = $recolte->potager->id;
            $prenom = $recolte->potager->user->prenom;
            $nom = $recolte->potager->user->nom;
            $rating = $recolte->rating;
            $vote = $recolte->vote;
            $type = $recolte->typerecolte->nom;
            $typeID = $recolte->typerecolte->id;
            $image = $recolte->image;
            $qte = $recolte->quantite;
            $description = $recolte->description;
            array_push($result, [
                "recolte_id" => $recolteID,
                "quantite" => $qte,
                "description" => $description,
                "potager_id" => $potagerID,
                "potager_owner_prenom" => $prenom,
                "potager_owner_nom" => $nom,
                "type" => $type,
                "type_id" => $typeID,
                "rating" => $rating,
                "vote" => $vote,
                "image" => $image,
                
            ]);
        }

        return $result;
    }

    public function findById($id) {
        $recolte = Recolte::where("id", $id)->first();
        $result = [];
        $recolteID = $recolte->id;
        $potagerID = $recolte->potager->id;
        $prenom = $recolte->potager->user->prenom;
        $nom = $recolte->potager->user->nom;
        $userID = $recolte->potager->user->id;
        $rating = $recolte->rating;
        $vote = $recolte->vote;
        $type = $recolte->typerecolte->nom;
        $typeID = $recolte->typerecolte->id;
        $image = $recolte->image;
        $imagePotager = $recolte->potager->image;
        $imageJardinier = $recolte->potager->user->image;
        $qte = $recolte->quantite;
        $description = $recolte->description;
        array_push($result, [
            "recolte_id" => $recolteID,
            "quantite" => $qte,
            "description" => $description,
            "potager_id" => $potagerID,
            "potager_owner_prenom" => $prenom,
            "potager_owner_nom" => $nom,
            "potager_owner_id" => $userID,
            "type" => $type,
            "type_id" => $typeID,
            "rating" => $rating,
            "vote" => $vote,
            "image_recolte" => $image,
            "image_potager" => $imagePotager,
            "image_jardinier" => $imageJardinier,
            
        ]);
        

        return $result;
    }

    public function addRating(Request $request, $id){
        $recolte = Recolte::find($id);
        $rating = $recolte->rating;
        $recolte->rating = $rating + $request->rating;
        $recolte->vote = $recolte->vote + 1;

        $success = $recolte->save();

        return $recolte;
    }

    public function edit(Request $request, $id) {
        $recolte = Recolte::find($id);
        if ($request->quantite != null){
            $recolte->quantite = $request->quantite;
        } else {
            $recolte->quantite = $recolte->quantite;
        }

        if ($request->image != null) {
            $recolte->image = $request->image;
        } else {
            $recolte->image = $recolte->image;
        }

        if ($request->description != null) {
            $recolte->description = $request->description;
        } else {
            $recolte->description = $recolte->description;
        }

        $success = $recolte->save();
        $result = [];

        $recolteID = $recolte->id;
        $potagerID = $recolte->potager->id;
        $prenom = $recolte->potager->user->prenom;
        $nom = $recolte->potager->user->nom;
        $rating = $recolte->rating;
        $vote = $recolte->vote;
        $type = $recolte->typerecolte->nom;
        $typeID = $recolte->typerecolte->id;
        $image = $recolte->image;
        $qte = $recolte->quantite;
        $description = $recolte->description;
            array_push($result, [
                "recolte_id" => $recolteID,
                "quantite" => $qte,
                "description" => $description,
                "potager_id" => $potagerID,
                "potager_owner_prenom" => $prenom,
                "potager_owner_nom" => $nom,
                "type" => $type,
                "type_id" => $typeID,
                "rating" => $rating,
                "vote" => $vote,
                "image" => $image,
                
            ]);
        return $result;
    }
}
