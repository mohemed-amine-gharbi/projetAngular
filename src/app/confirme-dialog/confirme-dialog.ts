import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirme-dialog',
  imports: [MatDialogModule],
  templateUrl: './confirme-dialog.html',
  styleUrl: './confirme-dialog.css',
})
export class ConfirmeDialog {
    constructor(public dialogRef: MatDialogRef<ConfirmeDialog>) { }
}
