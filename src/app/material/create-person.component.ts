import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-person',
  templateUrl: 'create-person.component.html',
  styles: [`
    .card {
      min-width: 200px;
    }
    .card-container {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class CreatePersonComponent {
  animalControl = new FormControl('', [Validators.required]);

  name = 'Jesús';
  description: string;
  check = false;
  date: Date;
  options = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  selected: string;
  value = 50;
  firstName: string;
  age: string;
}
