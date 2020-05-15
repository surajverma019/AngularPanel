import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';


const components = [
  ButtonLoadingComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class CustomControleModule { }
