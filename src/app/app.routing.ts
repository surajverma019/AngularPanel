import { Routes } from "@angular/router";

import { AuthGuard } from "./shared/guards/auth.guard";

import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { MasterLayoutComponent } from './shared/layouts/master-layout/master-layout.component';

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "/dashboard/home",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
        data: { title: "Session" },
      },
    ],
  },
  {
    path: "",
    component: MasterLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      }
    ]
  },
  {
    path: "**",
    redirectTo: "sessions/404",
  },
];
