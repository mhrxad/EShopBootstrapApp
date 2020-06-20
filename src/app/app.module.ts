import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EshopInterceptor} from "./Utilities/EshopInterceptor";
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {CookieService} from 'ngx-cookie-service';
import {SingleProductComponent} from './SharedComponents/single-product/single-product.component';
import {NgxLoadingModule} from 'ngx-loading'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    [SweetAlert2Module.forRoot()],
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true,
      backdropBackgroundColour: 'rgba(192,192,192,0.8)',
      primaryColour:'rgba(255,193,007,0.5)',
      secondaryColour:'rgba(255,193,007,0.7)',
      tertiaryColour:'rgba(255,193,007,1)',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EshopInterceptor,
      multi: true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
