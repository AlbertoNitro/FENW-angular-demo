import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CreatePersonDialogComponent } from './create-person-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']

})
export class MaterialComponent {
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(CreatePersonDialogComponent, {
      width: '300px'
    });
  }

}
