import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICES
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponentsModule } from './layouts/layout-components.module';
import { CustomControleModule } from './custom-controle/custom-controle.module';
import { MeetingResolver } from './resolvers/meeting.resolver';
import { MeetingService } from './services/meeting.service';
import { DirectivesModule } from './directives/directives.module';
import { UserRoleGuard } from './guards/user-role.guard';


@NgModule({
  imports: [
    CommonModule,
    LayoutComponentsModule,
    CustomControleModule,
    DirectivesModule
  ],
  providers: [
    AuthGuard,
    UserRoleGuard,
    MeetingResolver,
    MeetingService

  ],
  exports: [
    CustomControleModule,
    DirectivesModule
  ]
})
export class SharedModule { }
