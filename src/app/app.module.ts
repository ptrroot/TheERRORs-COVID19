import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//Incorporamos formsModule and ReactiveFormsModule because in news implements is a god option used this part of angular. to @BestPractices...
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './_services/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreguntaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
