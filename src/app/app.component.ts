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

  mapStyles = {
    width: '100%',
    height: '400px',
    // Agrega aquí cualquier otro estilo que desees modificar o agregar
  };

  constructor(private incendioService: IncendiosService,
    private dialog: MatDialog,
    private placeService: PlacesService
    ) {}

  ngOnInit(): void {
    
  }

  getIncendios(){

    this.incendioService.getIncendios().subscribe(data=>{
      //console.log(data);
    })
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
