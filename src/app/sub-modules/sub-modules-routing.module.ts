import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubModulesComponent } from './sub-modules.component';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';


const routes: Routes = [
    {
        path: '', component: SubModulesComponent,
        children: [
            { path: 'one', component: OneComponent },
            { path: 'two', component: TwoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubModulesRoutingModule {
    static components = [SubModulesComponent, OneComponent, TwoComponent];
}
