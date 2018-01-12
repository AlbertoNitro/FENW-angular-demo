import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog-create-person',
    templateUrl: 'dialog-create-person.component.html',
})
export class DialogCreatePersonComponent {
    public dialogRef: MatDialogRef<DialogCreatePersonComponent>;
    create() {
        // Create
        this.close();
    }

    close() {
        this.dialogRef.close();
    }

}
