import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {BannerComponent} from "./pages/home/banner/banner.component";
import {SliderComponent} from "./pages/home/slider/slider.component";
import {SiteHeaderComponent} from "./SharedComponents/site-header/site-header.component";
import {SiteFooterComponent} from "./SharedComponents/site-footer/site-footer.component";
import {ActiveAccountComponent} from "./SharedComponents/active-account/active-account.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'activate-account/:activeCode', component: ActiveAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  SiteHeaderComponent,
  SiteFooterComponent,
  HomeComponent,
  BannerComponent,
  SliderComponent,
  ContactUsComponent,
  AboutUsComponent,
  LoginComponent,
  RegisterComponent,
  ActiveAccountComponent


];
