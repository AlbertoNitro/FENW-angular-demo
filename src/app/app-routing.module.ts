import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BindingComponent } from './binding/binding.component';
import { SubComponentsComponent } from './sub-components/sub-components.component';
import { BasicComponent } from './sub-components/basic.component';
import { NumberComponent } from './sub-components/number.component';
import { DirectiveNgComponent } from './directive-ng/directive-ng.component';
import { CrudComponent } from './crud/crud.component';
import { RouteComponent } from './route/route.component';
import { Route1Component } from './route/route1.component';
import { Route2Component } from './route/route2.component';
import { PipeComponent } from './pipe/pipe.component';
import { ObserverComponent } from './observer/observer.component';
import { CounterObservableComponent } from './counter-observable/counter-observable-component';
import { ApiResponseComponent } from './api-response/api-response.component';
import { ApiGithubComponent } from './api-github/api-github.component';
import { ApiItemsComponent } from './api-items/api-items.componet';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'sub-components', component: SubComponentsComponent },
  { path: 'directive-ng', component: DirectiveNgComponent },
  { path: 'crud', component: CrudComponent },
  {
    path: 'routing', component: RouteComponent,

    children: [
      { path: '', redirectTo: 'route1', pathMatch: 'full' },
      { path: 'route1', component: Route1Component },
      { path: 'route2/:id', component: Route2Component }
    ]
  },
  { path: 'pipe', component: PipeComponent },
  { path: 'observer', component: ObserverComponent },
  { path: 'counter-observable', component: CounterObservableComponent },
  { path: 'api-response', component: ApiResponseComponent },
  { path: 'api-github', component: ApiGithubComponent },
  { path: 'api-items', component: ApiItemsComponent },
  { path: 'sub-modules', loadChildren: 'app/sub-modules-module/sub-modules.module#SubModulesModule' },
  { path: 'material', loadChildren: 'app/material-module/material.module#MaterialModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [PageNotFoundComponent, HomeComponent, TypescriptComponent, BindingComponent,
    SubComponentsComponent, BasicComponent, NumberComponent, DirectiveNgComponent, CrudComponent,
    RouteComponent, Route1Component, Route2Component, PipeComponent, ObserverComponent, CounterObservableComponent,
    ApiResponseComponent, ApiGithubComponent, ApiItemsComponent];
}

