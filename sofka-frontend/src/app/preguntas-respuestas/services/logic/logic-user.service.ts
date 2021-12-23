import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Usuario, DatosUsuario } from '../../interfaces/usuario.interface';
import { ApiUserService } from '../api/api-user.service';

@Injectable({
  providedIn: 'root'
})
export class LogicUserService {

  usuarioSubject = new Subject<Usuario>();
  usuario = this.usuarioSubject.asObservable();

  constructor( private api: ApiUserService, private router:Router ) { }

  getDataUser(datos: DatosUsuario){
    this.api.getData(datos).subscribe( data => {
      localStorage.setItem('jugador', JSON.stringify(data))
      this.usuarioSubject.next(data);
      this.router.navigateByUrl('/cuestionario')
    })
  }

  getDataUserLogin(){
    const { nombre } = JSON.parse(localStorage.getItem('jugador')!);
    const datos = {
      nombre: nombre.trim().toLowerCase(),
    };
    this.api.getData(datos).subscribe( data => {
      this.usuarioSubject.next(data);
    })
  }  
}
