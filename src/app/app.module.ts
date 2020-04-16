import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//Incorporamos formsModule and ReactiveFormsModule because in news implements is a god option used this part of angular. to @BestPractices...
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { Pregunta1Component } from './preguntas/pregunta1/pregunta1.component';
import { Pregunta2Component } from './preguntas/pregunta2/pregunta2.component';
import { Pregunta3Component } from './preguntas/pregunta3/pregunta3.component';
import { Pregunta4Component } from './preguntas/pregunta4/pregunta4.component';
import { PaginationService } from './pagination.service';
import { RespuestasService } from './respuestas.service';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreguntasComponent,
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component,
    Pregunta4Component,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PaginationService,RespuestasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
