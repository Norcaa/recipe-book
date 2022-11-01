import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'; // Take care of the import, it's not module!!
import { MaterialModule } from 'material.module';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonComponent } from './share-button/share-button.component';
import { ShareModule } from 'ngx-sharebuttons';
import { PreparationStepComponent } from './preparation-step/preparation-step.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubmitButtonComponent } from './submit-button/submit-button.component';


const MODULES = [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ShareModule,
    ReactiveFormsModule,
    NotifierModule
]

@NgModule({
  declarations: [
    ShareButtonComponent,
    PreparationStepComponent,
    SubmitButtonComponent
  ],
  imports: [ ...MODULES, AngularSvgIconModule.forRoot() ],
  exports: [
    ...MODULES,
    ShareButtonComponent,
    SubmitButtonComponent,
    AngularSvgIconModule
  ]
})
export class SharedModule { }
