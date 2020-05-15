import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICES
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponentsModule } from './layouts/layout-components.module';
import { CustomControleModule } from './custom-controle/custom-controle.module';
import { MeetingResolver } from './resolvers/meeting.resolver';
import { MeetingService } from './services/meeting.service';


@NgModule({
  imports: [
    CommonModule,
    LayoutComponentsModule,
    CustomControleModule
  ],
  providers: [
    AuthGuard,
    MeetingResolver,
    MeetingService

  ],
  exports: [
    CustomControleModule
  ]
})
export class SharedModule { }
