import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialRoutingModule } from './material-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialRoutingModule
    ],
    entryComponents: [MaterialRoutingModule.factoryComponents],
    declarations: [MaterialRoutingModule.components]
})
export class MaterialModule { }
