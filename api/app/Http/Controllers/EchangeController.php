<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Echange;
use App\User;
use App\Potager;
use App\Recolte;

class EchangeController extends Controller
{
    public function getFromId($id){
        $echangesToShow = Echange::where("user_from_id", $id)
        ->where("completed", 0)
        ->get();
        $result = [];

        foreach ($echangesToShow as $echange) {
            $echangeID = $echange->id;
            $echangeFromID = $echange->user_from_id;
            $echangeToID = $echange->user_to_id;
            $echangeProduceFromID = $echange->produce_from_id;
            $echangeProduceToID= $echange->produce_to_id;

            $jardinierFrom = User::where("id", $echangeFromID)->first();
            $jardinierFromPrenom = $jardinierFrom->prenom;
            $jardinierFromNom = $jardinierFrom->nom;

            $jardinierTo = User::where("id", $echangeToID)->first();
            $jardinierToPrenom = $jardinierTo->prenom;
            $jardinierToNom = $jardinierTo->nom;
            
            $produceFrom = Recolte::where("id", $echangeProduceFromID)->first();
            $produceFromNom = $produceFrom->typerecolte->nom;
            $produceFromQte = $produceFrom->quantite;

            if ($echangeProduceToID != null){
                $produceTo = Recolte::where("id", $echangeProduceToID)->first();
                $produceToNom = $produceTo->typerecolte->nom;
                $produceToQte = $produceTo->quantite;
            } else {
                $produceToNom = "Aucun";
                $produceToQte = "";
            }

            array_push($result, [
                "echange_id" => $echangeID,
                "echange_from_id" => $echangeFromID,
                "echange_to_id" => $echangeToID,
                "echange_produce_from_id" => $echangeProduceFromID,
                "echange_produce_to_id" => $echangeProduceToID,
                "jardinier_from_prenom" => $jardinierFromPrenom,
                "jardinier_from_nom" => $jardinierFromNom,
                "jardinier_to_prenom" => $jardinierToPrenom,
                "jardinier_to_nom" => $jardinierToNom,
                "produce_from_nom" => $produceFromNom,
                "produce_from_quantite" => $produceFromQte,
                "produce_to_nom" => $produceToNom,
                "produce_to_quantite" => $produceToQte,
            ]);
            
        }
        return $result;
    }

    public function getToId($id){
        $echangesToShow = Echange::where("user_to_id", $id)
        ->where("completed", 0)
        ->get();
        $result = [];

        foreach ($echangesToShow as $echange) {
            $echangeID = $echange->id;
            $echangeFromID = $echange->user_from_id;
            $echangeToID = $echange->user_to_id;
            $echangeProduceFromID = $echange->produce_from_id;
            $echangeProduceToID= $echange->produce_to_id;

            $jardinierFrom = User::where("id", $echangeFromID)->first();
            $jardinierFromPrenom = $jardinierFrom->prenom;
            $jardinierFromNom = $jardinierFrom->nom;

            $jardinierTo = User::where("id", $echangeToID)->first();
            $jardinierToPrenom = $jardinierTo->prenom;
            $jardinierToNom = $jardinierTo->nom;
            
            $produceFrom = Recolte::where("id", $echangeProduceFromID)->first();
            $produceFromNom = $produceFrom->typerecolte->nom;
            $produceFromQte = $produceFrom->quantite;

            if ($echangeProduceToID != null){
                $produceTo = Recolte::where("id", $echangeProduceToID)->first();
                $produceToNom = $produceTo->typerecolte->nom;
                $produceToQte = $produceTo->quantite;
            } else {
                $produceToNom = "Aucun";
                $produceToQte = "";
            }

            array_push($result, [
                "echange_id" => $echangeID,
                "echange_from_id" => $echangeFromID,
                "echange_to_id" => $echangeToID,
                "echange_produce_from_id" => $echangeProduceFromID,
                "echange_produce_to_id" => $echangeProduceToID,
                "jardinier_from_prenom" => $jardinierFromPrenom,
                "jardinier_from_nom" => $jardinierFromNom,
                "jardinier_to_prenom" => $jardinierToPrenom,
                "jardinier_to_nom" => $jardinierToNom,
                "produce_from_nom" => $produceFromNom,
                "produce_from_quantite" => $produceFromQte,
                "produce_to_nom" => $produceToNom,
                "produce_to_quantite" => $produceToQte,
            ]);
            
        }
        return $result;
    }

    public function deleteOffer(Request $request, $id){
        $echange = Echange::find($id);

        $echange->completed = $request->completed;

        $success = $echange->save();
        return $echange;
    }
}
