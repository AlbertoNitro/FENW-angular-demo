import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-comp',
  templateUrl: 'sub-components.component.html'
})
export class SubComponentsComponent {
  value = '';

  onBasicEvent(event: string) {
    alert(event);
  }

}
