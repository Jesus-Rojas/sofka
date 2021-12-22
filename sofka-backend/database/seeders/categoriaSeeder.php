<?php

namespace Database\Seeders;

use App\Models\Categoria;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $categorias = [
            'Laravel',
            'Js',
            'Html',
            'Css',
            'Angular',
        ];
        foreach ($categorias as $value) {
            Categoria::create([
                'nombre' => $value,
            ]);
        }
    }
}
