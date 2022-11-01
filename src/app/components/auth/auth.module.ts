import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const MODULES = [
    AuthComponent,
    ProfileComponent,
    ForgotPasswordComponent
]

@NgModule({
    declarations: [
        ...MODULES
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ...MODULES
    ]
})
export class AuthModule { }
