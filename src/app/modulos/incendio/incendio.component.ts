import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-incendio',
  templateUrl: './incendio.component.html',
  styleUrls: ['./incendio.component.scss']
})
export class IncendioComponent {
  constructor(public dialogRef:MatDialogRef<IncendioComponent>) {
    
    
  }
}
