import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  user: string = "";
  pass: string = ""
  constructor(public dialogRef:MatDialogRef<LoginComponent>,
    private usuarioService: UsuariosService) {
    
    
  }

  login(){
    if(this.user === "" || this.pass === ""){
      alert("Casillas vacias, ingrese los datos.");
      console.log(this.user);
      return;
    }
    this.usuarioService.login(this.user, this.pass).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }
}
