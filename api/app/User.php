<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $hidden=[
        'password',
        'reponse'
    ];

    public function potager(){
        return $this->hasOne('App\Potager');
    }
}
