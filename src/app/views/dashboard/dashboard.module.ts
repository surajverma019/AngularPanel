import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from "./dashboard.routing";
import { RouterModule } from '@angular/router';
import { ShowMeetingComponent } from './show-meeting/show-meeting.component';
import { FormComponent } from './form/form.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingsComponent } from './meetings/meetings.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    DashboardComponent,
    ShowMeetingComponent,
    FormComponent,
    MeetingsComponent
  ]
})
export class DashboardModule { }
