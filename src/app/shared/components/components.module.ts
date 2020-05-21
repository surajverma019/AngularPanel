import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';

import { CustomCalenderComponent } from './custom-calender/custom-calender.component';

const components = [
  CustomCalenderComponent
]

@NgModule({
  declarations: components,
  exports : components,
  imports: [
    CommonModule,
    FullCalendarModule,
  ],
  
})
export class ComponentsModule { }
