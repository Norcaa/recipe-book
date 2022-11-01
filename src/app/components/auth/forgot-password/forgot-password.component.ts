import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    // TODO: interaction

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log("it works!")
    }

}
