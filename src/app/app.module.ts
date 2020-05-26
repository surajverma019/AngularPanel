import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { rootRouterConfig } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PushNotificationService } from './shared/services/push-notification.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      HttpClientModule,
      RouterModule.forRoot(rootRouterConfig, { useHash: false }),
      FontAwesomeModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
   providers: [
      PushNotificationService,
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },

      // REQUIRED IF YOU USE JWT AUTHENTICATION
      {
         provide: HTTP_INTERCEPTORS,
         useClass: TokenInterceptor,
         multi: true,
      },
   ],
   bootstrap: [
      AppComponent
   ],

   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
