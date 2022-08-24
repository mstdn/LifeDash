<?php

use App\Models\Category;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->timestamps();
        });

        $data =  array(
            [
                'name' => 'Default',
                'slug' =>  'default',
            ],
            [
                'name' => 'Important',
                'slug' =>  'important',
            ],
            
        );
        foreach ($data as $datum) {
            $category = new Category(); //The Category is the model for your migration
            $category->name = $datum['name'];
            $category->slug = $datum['slug'];
            $category->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
