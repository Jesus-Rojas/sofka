import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LogicUserService } from '../../services/logic/logic-user.service';
import { ApiPreguntaService } from '../../services/api/api-pregunta.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit, OnDestroy {
  
  usuario = this.logicUser.usuario;
  // jugadorSubscription!: Subscription;
  puntos = 0;
  ronda = 1;
  preguntas = '¿Question?';
  respuestas = [1,2,3,4];
  jugador!:Usuario;

  constructor ( private logicUser: LogicUserService, private apiPregunta: ApiPreguntaService, private router: Router ) { }
  

  ngOnInit(): void {
    let local:any = localStorage.getItem('jugador');
    if (local && local.trim().length > 0) {
      local = JSON.parse(local);
      if (local && local.id && local.nombre) {
        this.jugador = local;
        this.existeIntento()
      } else {
        localStorage.clear();
        this.router.navigateByUrl('/home');
      }
    } else {
      this.router.navigateByUrl('/home');
    }
    // this.jugadorSubscription = this.usuario.subscribe( data => {
    //   this.jugador = data;
    //   this.existeIntento()
    // });
  }

  existeIntento(){
    const datos = {
      jugadores_id: this.jugador.id,
    };
    this.apiPregunta.validarIntento(datos).subscribe( data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    // this.jugadorSubscription.unsubscribe();
  }
}