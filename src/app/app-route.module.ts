import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RouteComponent } from './route/route.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'route/:id', component: RouteComponent, },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }
