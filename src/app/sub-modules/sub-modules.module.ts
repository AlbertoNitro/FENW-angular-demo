import { NgModule } from '@angular/core';

import { SubModulesComponent } from './sub-modules.component';
import { FormsModule } from '@angular/forms';
import { SubModulesRoutingModule } from './sub-modules-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SubModulesRoutingModule
    ],
    declarations: [
        SubModulesRoutingModule.components
    ]
  })
  export class SubModulesModule { }
