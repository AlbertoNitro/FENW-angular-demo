import { Component, OnInit } from '@angular/core';
import { ObservableSubject } from '../observer/observable-subject.model';

@Component({
    selector: 'app-observer',
    template: `<h2> Patrón Observer</h2>
               <h3>Observer1: {{value}}</h3>
               <h3>Observer2: {{value2}}</h3>
               <p>{{completed}}</p>`
})
export class ObserverComponent implements OnInit {

    value: String;
    value2: String;
    completed = '';

    private observableSubject: ObservableSubject = new ObservableSubject();

    ngOnInit(): void {
        this.observableSubject.getObservable().subscribe( // Observador
            data => this.value = data,
            error => alert('Observer1, error code: ' + error),
            () => this.completed = 'COMPLETADO!!!... Ojo! una vez completado, deja de funcionar'
        );
        this.observableSubject.getObservable().subscribe( // Otro observador
            data => this.value2 = data,
            error => alert('Observer2, error code: ' + error)
        );
    }

}
