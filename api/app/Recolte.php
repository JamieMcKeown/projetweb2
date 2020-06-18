<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recolte extends Model
{
    public function typerecolte(){
        return $this->belongsTo('App\Typerecolte');
    }

    public function potager(){
        return $this->belongsTo('App\Potager');
    }
}
