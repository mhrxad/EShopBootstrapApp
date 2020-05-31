import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EshopInterceptor} from "./Utilities/EshopInterceptor";



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EshopInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
