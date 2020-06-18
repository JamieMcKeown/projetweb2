<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Typerecolte;

class TyperecolteController extends Controller
{
    public function create(Request $request) {
        $type = new Typerecolte();
        $type->nom = $request->nom;
        $type->cupcode = $request->cupcode;

        $success = $type->save();
        return $type;
    }

    public function edit(Request $request, $id){
        $type = Typerecolte::find($id);
        if ($request->nom != null) {
            $type->nom = $request->nom;
        } else {
            $type->nom = $type->nom;
        }

        if ($request->cupcode != null) {
            $type->cupcode = $request->cupcode;
        } else {
            $type->cupcode = $request->cupcode;
        }

        $success = $type->save();

        return $type;
    }
}
