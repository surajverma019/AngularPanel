import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { LoginComponent } from './login/login.component';
import { SessionsRoutes } from "./sessions.routing";
import { RouterModule } from '@angular/router';
import { CustomControleModule } from 'src/app/shared/custom-controle/custom-controle.module';
import { RoleChangerComponent } from './role-changer/role-changer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    CustomControleModule,
    RouterModule.forChild(SessionsRoutes),
  ],
  declarations: [LoginComponent,
    RoleChangerComponent]
})
export class SessionsModule { }
