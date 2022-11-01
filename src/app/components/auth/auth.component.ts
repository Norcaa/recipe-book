import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    private readonly notifier: NotifierService;
    loginAction: boolean = true
    showForm: boolean = false
    showPassword: boolean = false

    userForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
        ]),
    });

    constructor(
        private router: Router, 
        private authService: AuthService,
        private notifierService: NotifierService) {
            this.notifier = notifierService
        }

    ngOnInit(): void {
        if (this.router.url === '/auth/login')
            this.loginAction = true
        else if (this.router.url === '/auth/registration')
            this.loginAction = false
        else 
            this.router.navigateByUrl('/')
    }

    togglePassword() {
        this.showPassword = !this.showPassword
    }

    onSubmit() {
        if (this.loginAction) {
            this.login()
        } else {
            this.register()
        }
    }

    register() {
        /* this.authService.register() */
        console.log(this.userForm.value)
        console.log(this.userForm.status)
        this.notifier.notify('success', 'You are awesome! I mean it!');
    }

    login() {
        /* this.authService.login() */
        console.log(this.userForm.value)
        console.log(this.userForm.status)
        this.notifier.notify('success', 'You are awesome! I mean it!');
    }
}
