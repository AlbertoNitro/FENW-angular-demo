import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-basic',
  template: `<h3>sub-component: basic</h3>
             <p>{{basicProperty}}</p>
             <p><button (click)='event($event)'>event</button>`
})
export class BasicComponent {

  @Input() basicProperty: String;

  @Output() basicEvent = new EventEmitter<any>();

  event(msg) {
    this.basicEvent.emit(msg);
    // this.basicEvent.emit('value');
  }
}
