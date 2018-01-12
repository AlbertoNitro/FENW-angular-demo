import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog-create-person',
    templateUrl: 'create-person-dialog.component.html',
})
export class CreatePersonDialogComponent {
    create() {
        alert('create...');
    }
}
