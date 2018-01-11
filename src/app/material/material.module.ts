import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialRoutingModule } from './material-routing.module';


@NgModule({
    imports: [
        FormsModule,
        MaterialRoutingModule
    ],
    declarations: [
        MaterialRoutingModule.components
    ]
})
export class MaterialModule { }
