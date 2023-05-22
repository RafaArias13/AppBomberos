import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './modulos/login/login.component';
import { LugarComponent } from './modulos/lugar/lugar.component';
import { IncendioComponent } from './modulos/incendio/incendio.component';
import { NotificacionesComponent } from './modulos/notificaciones/notificaciones.component';
import {MatCardModule} from '@angular/material/card';
import { NgLeafletModule } from '@mugan86/ng-leaflet';
import { VerificarComponent } from './modulos/verificar/verificar.component';
import { EstadosComponent } from './modulos/estados/estados.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LugarComponent,
    IncendioComponent,
    NotificacionesComponent,
    VerificarComponent,
    EstadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    GoogleMapsModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgLeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
