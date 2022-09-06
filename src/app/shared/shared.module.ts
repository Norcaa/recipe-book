import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'; // Take care of the import, it's not module!!
import { MaterialModule } from 'material.module';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
