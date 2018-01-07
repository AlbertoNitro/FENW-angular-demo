import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `<h3>Route2</h3>
             <h4>Id: {{id}}</h4>
             <p><button (click)='home()'>home</button><button (click)='route()'>route</button></p>
  `
})
export class Route2Component {



  id: number;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  home() {
    this.router.navigate(['/home']);
  }

  route() {
    this.router.navigate(['route']);
  }

}

