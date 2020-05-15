import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from "./dashboard.routing";
import { RouterModule } from '@angular/router';
import { ShowMeetingComponent } from './show-meeting/show-meeting.component';
import { FormComponent } from './form/form.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    DashboardComponent,
    ShowMeetingComponent,
    FormComponent
  ]
})
export class DashboardModule { }
