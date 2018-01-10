import { Component } from '@angular/core';

@Component({
  template: `
    <h2>Routing</h2>
    <h3>Cabecera, menus...<h3>
    <ul>
      <li><a [routerLink]="['route1']">
         Route 1</a></li>
      <li><a [routerLink]="['route2', 666]">
            Route 2:666</a></li>
    </ul>
    <router-outlet></router-outlet>
    <h3>pie...<h3>
  `
})
export class RouteComponent { }
