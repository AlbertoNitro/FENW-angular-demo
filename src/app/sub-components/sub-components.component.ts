import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-comp',
  template: `<h2>Sub-components</h2>
             <app-basic [basicProperty]="title" (basicEvent)="processEvent($event)"></app-basic>
             <number [min]="0" [max]="100" [value]="6" (valueOut)="value=$event"></number>
             <p>Valor del subcomponente Number (solo si es válido):{{value}}</p>
  `
})
export class SubComponentsComponent {
  value = '';

  processEvent(event: string) {
    alert(event);
  }

}
