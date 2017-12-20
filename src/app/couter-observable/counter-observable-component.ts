import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-counter-observable',
    template: `<h3>Counter</h3>
               <button (click)="increase()">+</button> {{counter}}
               <h3>Observer: {{observer}}</h3>`
})
export class CounterObservableComponent implements OnInit {

    counter = 0;

    counterObservable: Subject<number> = new Subject();

    observer: number;

    ngOnInit(): void {
        this.counterObservable.asObservable().subscribe(
            value => this.observer = value,
            error => alert('error: ' + error),
            () => alert('Completado')
        );
    }
    increase() {
        this.counter++;
        if (this.counter > 9) {
            this.counterObservable.complete();
        } else {
            this.counterObservable.next(this.counter);
        }
    }




}
