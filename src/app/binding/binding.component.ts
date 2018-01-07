import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent {
    title = 'Angular. Demo';
    buttonName = 'Mouse event';
    getValue(): number {
        return 666;
    }
    event(title: string) {
        this.title = title;
    }
    event2(msg: any) {
        this.buttonName = `mouse event --> x: ${msg.x}, y: ${msg.y}`;
    }
}
