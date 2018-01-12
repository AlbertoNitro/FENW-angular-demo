import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { MaterialComponent } from './material.component';
import { HomeComponent } from './home.component';
import { CreatePersonComponent } from './create-person.component';
import { CreatePersonDialogComponent } from './create-person-dialog.component';
import { CreatePersonFlexComponent } from './create-person-flex.component';

const routes: Routes = [
    {
        path: '', component: MaterialComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'create-person', component: CreatePersonComponent },
            { path: 'create-person-flex', component: CreatePersonFlexComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class MaterialRoutingModule {
    static components = [
        MaterialComponent,
        HomeComponent,
        CreatePersonComponent,
        CreatePersonFlexComponent,
        CreatePersonDialogComponent
    ];
    static componentFactory = [
        CreatePersonDialogComponent
    ];
}
