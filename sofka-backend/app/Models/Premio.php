<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Premio extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'jugadores_id',
        'ronda_pregunta_jugadores_id',
        'puntuacion',
        'termino',
    ];

    public function jugadores(){
        return $this->belongsTo(Jugador::class);
    }

    public function rondaPreguntaIntentos(){
        return $this->belongsTo(RondaPreguntaIntento::class);
    }
}