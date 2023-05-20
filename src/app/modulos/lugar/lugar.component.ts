import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss']
})
export class LugarComponent {
  constructor(public dialogRef:MatDialogRef<LugarComponent>) {
    
    
  }
}
