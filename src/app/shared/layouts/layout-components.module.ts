import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "../shared-material.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


const components = [
  AuthLayoutComponent,
  MasterLayoutComponent,
  SideNavComponent,
  TopNavComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    SharedMaterialModule,
    BsDropdownModule.forRoot()
  ],
  declarations: components,
  entryComponents: [
  ],
  exports: components
})
export class LayoutComponentsModule { }
