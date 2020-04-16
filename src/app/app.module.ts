import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//Incorporamos formsModule and ReactiveFormsModule because in news implements is a god option used this part of angular. to @BestPractices...
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { Pregunta1Component } from './Preguntas/pregunta1/pregunta1.component';
import { Pregunta2Component } from './Preguntas/pregunta2/pregunta2.component';
import { Pregunta3Component } from './Preguntas/pregunta3/pregunta3.component';
import { Pregunta4Component } from './Preguntas/pregunta4/pregunta4.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreguntasComponent,
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component,
    Pregunta4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
