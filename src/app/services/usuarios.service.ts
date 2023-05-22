import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ruta: string = "https://hackaton-new-relic.herokuapp.com";

  usuario = {
    username: "",
    password:""
  }

  constructor(private http: HttpClient) { }

  login(user: string, pass: string):Observable<any>{
    this.usuario.username = user;
    this.usuario.password = pass;

    return this.http.post<any>(`${this.ruta}/login`, this.usuario, httpOption);
  }


}
