import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationService } from './services/registration.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
