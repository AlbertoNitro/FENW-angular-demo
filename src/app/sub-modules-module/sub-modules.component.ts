import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-modules',
  templateUrl: './sub-modules.component.html'
})
export class SubModulesComponent {
  title = '';

  isEmpty(): boolean {
    return this.title.length === 0;
  }
}
