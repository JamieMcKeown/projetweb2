<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Typerecolte extends Model
{
    public function recoltes(){
        return $this->hasMany('App\Recolte');
    }
}
