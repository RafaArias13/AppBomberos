import { Component } from '@angular/core';
import { GetIncendios } from 'src/app/modelos/get-incendios';
import { IncendiosService } from 'src/app/services/incendios.service';
import { PlacesService } from 'src/app/services/places.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { VerificarComponent } from '../verificar/verificar.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {
  public getIncendios: GetIncendios[] = [];

  latitude: number = 0;
  longitude: number = 0;

  map?: google.maps.Map;
  icono: string = "";
  
  userLocation: [number, number] = [0,0];

  constructor(private incendioService: IncendiosService,
    private placeService: PlacesService,
    private dialog: MatDialog,) {


  }

  ngOnInit() {
    this.getIncendio();
    this.getIncendios.forEach(x => {
      // let distancia = this.calcularDistancia(this.latitude, this.longitude, x.latitud, x.longitud);
      
      switch(x.riesgo){
        case 'Alto':
          this.icono = "'http://maps.google.com/mapfiles/ms/icons/red-dot.png';";
          break;
        case 'Medio':
          this.icono = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
          break;
        case 'Bajo':
          this.icono = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
      }
      // const marker = new google.maps.Marker({
      //   position: { lat: x.latitud, lng: x.longitud },
      //   map: this.map,
      //   icon: this.icono
      // });

    });
  }

  getIncendio() {

    this.incendioService.getIncendios().subscribe(data => {
      this.getIncendios = data.incendios;
      console.log(this.getIncendios);
    })
  }

  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat: number = this.toRadians(lat2 - lat1);
    const dLon: number = this.toRadians(lon2 - lon1);
    const rlat1: number = this.toRadians(lat1);
    const rlat2: number = this.toRadians(lat2);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rlat1) * Math.cos(this.toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;
    return distancia;
  }

  toRadians(grados: number): number {
    let rpta: number = grados * (Math.PI / 180);
    return rpta;
  }

  getUserLocation() {
    this.placeService.getUserLocation()
      .then((location: [number, number]) => {
        this.userLocation = location;
        // Utiliza la geolocalización según tus necesidades
        // Por ejemplo, puedes llamar a una función para cargar el mapa con estas coordenadas
        
        this.loadMapWithCoordinates(this.userLocation[0], this.userLocation[1]);
      })
      .catch((error) => {
        console.log(error);
        // Maneja el error de obtener la geolocalización
      });
  }

  loadMapWithCoordinates(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;

  }

  openVerificar(id:string){
    const dialogRef: MatDialogRef<any> = this.dialog.open(VerificarComponent, {
      data: { valor: id }
    });
  }

  // openEstado(id:string){
  //   const dialogRef: MatDialogRef<any> = this.dialog.open(VerificarComponent, {
  //     data: { valor: id }
  //   });
  // }
}


