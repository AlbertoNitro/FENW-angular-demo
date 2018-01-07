import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SubComponentsComponent } from './sub-components.component';
import { BasicComponent } from './basic.component';
import { NumberComponent } from './number.component';


@NgModule({
    imports: [
        FormsModule, BrowserModule
      ],
    declarations: [
        SubComponentsComponent,
        BasicComponent,
        NumberComponent
    ],
    exports: [
        SubComponentsComponent,
        BasicComponent,
        NumberComponent
    ]
})
export class SubComponentsModule {
}
