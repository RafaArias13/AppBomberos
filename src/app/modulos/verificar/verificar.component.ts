import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.scss']
})
export class VerificarComponent {
  
  valorRecibido?: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef:MatDialogRef<VerificarComponent>) {
    this.valorRecibido = data.valor;
    
  }

  enviarOk(){
    Swal.fire({
      title: `Guardado correctamente`,
      icon: 'success',
      timer: 10000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    this.dialogRef.close();
  }

  enviarFake(){
    Swal.fire({
      title: `Guardado correctamente`,
      icon: 'success',
      timer: 10000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    this.dialogRef.close();
  }

  sendVerificacion(){

    this.dialogRef.close();
  }
}
