import { Routes, RouterModule, RunGuardsAndResolvers } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ShowMeetingComponent } from './show-meeting/show-meeting.component';
import { MeetingResolver } from 'src/app/shared/resolvers/meeting.resolver';
import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { UserRoleGuard } from 'src/app/shared/guards/user-role.guard';
import { PreventUserUnSavedChanges } from 'src/app/shared/guards/prevent-user-unsaved-changes.guard';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  {},
];

export const DashboardRoutes = [
  {
    path: "",
    canActivate: [UserRoleGuard],
    runGuardsAndResolvers: "always" as RunGuardsAndResolvers,
    children: [
      {
        path: "home",
        component: DashboardComponent,
      },
      {
        path: "meeting",
        component: ShowMeetingComponent,
        resolve: { meeting: MeetingResolver }
      },
      {
        path: "form",
        component: FormComponent,
        canDeactivate: [PreventUserUnSavedChanges],
        data: { roles: ['RM', 'SRM'] },
      },
      {
        path: "meetings",
        component: MeetingsComponent,
      },
    ],
  },
];