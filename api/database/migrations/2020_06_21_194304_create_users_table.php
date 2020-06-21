<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('prenom', 100);
            $table->string('nom', 100);
            $table->string('email')->unique();
            $table->string('password', 100);
            $table->integer('rating');
            $table->integer('vote');
            $table->string('numero_porte', 100)->nullable();
            $table->string('ville', 100)->nullable();
            $table->string('code_postal', 7)->nullable();
            $table->boolean('admin');
            $table->string('question_secrete', 100);
            $table->string('reponse', 100);
            $table->string('image', 200)->nullable();
            $table->text('bio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
