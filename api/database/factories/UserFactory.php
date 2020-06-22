<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'prenom' => $faker->firstName,
        'nom' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'password' => $faker->password,
        'rating' => $faker->numberBetween($min = 20, $max = 100),
        'vote' => $faker->numberBetween($min = 1, $max = 10),
        'numero_porte' => $faker->streetAddress,
        'ville' => $faker->city,
        'code_postal' => 'J1J 1J1',
        'admin' => 0,
        'question_secrete' => $faker->text($maxNbChars = 99),
        'reponse' => $faker->text($maxNbChars = 99),
        'bio' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
    ];
});
