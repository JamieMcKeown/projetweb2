<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\User;

Route::get('/user', 'UserController@show');
Route::get('/user/random/{amount}', 'UserController@showRandom');
Route::get('/user/{email}&{password}', 'UserController@getWithEmail');
Route::get('/user/{id}', 'UserController@showWithId');
Route::post('/user/new', 'UserController@create');
Route::put('/user/vote/{id}', 'UserController@addRating');
Route::put('/user/edit/{id}', 'UserController@editUser');
Route::put('/user/editPW/{id}', 'UserController@editUserPassword');
Route::put('/user/editSecret/{id}', 'UserController@editUserSecret');
Route::delete('/user/delete/{id}', 'UserController@delete');

Route::get('/potager', 'PotagerController@show');
Route::get('/potager/{id}', "PotagerController@showWithId");
Route::get('/potager/user/{id}', "PotagerController@showWithUserId");
Route::get('/potager/random/{amount}', 'PotagerController@showRandom');
//Route::post('/potager/new', 'PotagerController@create');
Route::put('/potager/vote/{id}', 'PotagerController@addRating');
Route::put('/potager/edit/{id}', 'PotagerController@editPotager');
Route::delete('/potager/delete/{id}', 'PotagerController@delete');

Route::get('/recolte', 'RecolteController@show');
Route::get('/recolte/{id}', 'RecolteController@findById');
Route::get('/recolte/potager/{id}', 'RecolteController@findByOwner');
Route::get('/recolte/typerecolte/{id}', 'RecolteController@findByType');
Route::post('/recolte/new', 'RecolteController@create');
Route::put('/recolte/vote/{id}', 'RecolteController@addRating');
Route::put('/recolte/edit/{id}', 'RecolteController@edit');

Route::post('/typerecolte/new', 'TyperecolteController@create');
Route::put('/typerecolte/edit/{id}', 'TyperecolteController@edit');

Route::get('/echange/{id}', 'EchangeController@getFromId');
Route::get('/echange/to/{id}', 'EchangeController@getToId');
Route::put('/echange/complete/{id}', 'EchangeController@deleteOffer');