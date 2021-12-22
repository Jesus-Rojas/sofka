<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opcion extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'preguntas_id',
        'correcta',
    ];

    public function preguntas(){
        return $this->belongsTo(Pregunta::class);
    }
}
