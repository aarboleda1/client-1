import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarSignedoutComponent } from './shared/navbar-signedout/navbar-signedout.component';
import { NavbarSignedinComponent } from './shared/navbar-signedin/navbar-signedin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { SignupService } from './signup/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarSignedoutComponent,
    NavbarSignedinComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
