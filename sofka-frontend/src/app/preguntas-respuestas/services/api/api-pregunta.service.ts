import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPreguntaService {

  url = environment.api;

  constructor(private http: HttpClient) { }

  validarIntento(datos:LogicDatosUser) :Observable<any>  {
    return this.http.post<any>(`${this.url}/intento`, datos)
  }
}

interface LogicDatosUser {
  jugadores_id: number;
}
