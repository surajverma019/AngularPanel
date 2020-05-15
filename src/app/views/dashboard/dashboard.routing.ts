import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ShowMeetingComponent } from './show-meeting/show-meeting.component';
import { MeetingResolver } from 'src/app/shared/resolvers/meeting.resolver';
import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {},
];

export const DashboardRoutes = [
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "meeting",
    component: ShowMeetingComponent,
    resolve: { meeting: MeetingResolver }
  },
  {
    path: "form",
    component: FormComponent
  },
];