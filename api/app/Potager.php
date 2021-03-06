<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Potager extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function recoltes(){
        return $this->hasMany('App\Recolte');
    }
}
