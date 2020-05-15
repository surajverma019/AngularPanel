import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {  },
];

export const SessionsRoutes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent,
        data: { title: "Login" },
      }
    ],
  },
];
