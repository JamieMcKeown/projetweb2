<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Echange extends Model
{
    public function user(){
        return $this->hasMany('App\User');
    }

    public function recoltes(){
        return $this->hasMany('App\Recolte');
    }
}
