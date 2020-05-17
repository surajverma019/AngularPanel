import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HasRoleDirective } from './hasRole.directive';

const directives = [
  HasRoleDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class DirectivesModule { }
