import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-submit-button',
    templateUrl: './submit-button.component.html',
    styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {

    @Input() value: string = "Submit"
    @Output() submit = new EventEmitter()

    constructor() { }

    onSubmit() {
        this.submit.emit()
    }

}
