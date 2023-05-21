import { Component } from '@angular/core';
import { GetIncendios } from 'src/app/modelos/get-incendios';
import { Iincendios } from 'src/app/modelos/iincendios';
import { IncendiosService } from 'src/app/services/incendios.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {
  public getIncendios: GetIncendios[] = [];
  constructor(private incendioService: IncendiosService) {
    
    
  }

  ngOnInit(){
    this.getIncendio();
  }

  getIncendio(){
   
    this.incendioService.getIncendios().subscribe(data=>{
      this.getIncendios = data.incendios;
      console.log(this.getIncendios);
    })
  }
}
