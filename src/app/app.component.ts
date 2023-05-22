import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IncendiosService } from './services/incendios.service';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field'
import { LoginComponent } from './modulos/login/login.component';
import { LugarComponent } from './modulos/lugar/lugar.component';
import { IncendioComponent } from './modulos/incendio/incendio.component';
import { PlacesService } from './services/places.service';

declare const google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appIncendios';

  latitude: number = 0;
  longitude: number = 0;
  center = {lat: this.latitude, lng: this.longitude}

  height = "660px";
  width = "100%";

  map?: google.maps.Map;
  

  userLocation: [number, number] = [0,0];
  mapStyles = {
    width: '100%',
    height: '400px',
    // Agrega aquí cualquier otro estilo que desees modificar o agregar
  };

  constructor(private incendioService: IncendiosService,
    private dialog: MatDialog,
    private placeService: PlacesService,
    
    ) {
      this.getUserLocation();
    }

  ngOnInit(): void {
    
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

    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    });
  }

  getLugar(){
    console.log(this.placeService.useLocation);
  }

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width:"20%"
    })
  }

  openLugar(){
    const dialogRef = this.dialog.open(LugarComponent,{
      width:"20%"
    })
  }

  openIncendio(){
    const dialogRef = this.dialog.open(IncendioComponent,{
      width:"20%"
    })
  }
}
