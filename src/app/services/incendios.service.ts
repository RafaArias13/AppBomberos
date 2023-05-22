import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iincendios } from '../modelos/iincendios';
import { Observable } from 'rxjs/internal/Observable';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IncendiosService {

  ruta: string = "https://hackaton-new-relic.herokuapp.com";

  constructor(private http: HttpClient) { }

  getIncendios(): Observable<any>{
    return this.http.get<any>(`${this.ruta}/incendios`, httpOption);
  }

  postIncendio(id:string):Observable<any>{
    return this.http.patch<any>(`${this.ruta}/incendio/${id}/verificar?real=true||false`, httpOption);
  }
}
