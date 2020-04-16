import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/pagination.service';
import { RespuestasService } from 'src/app/respuestas.service';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component implements OnInit {

  IS = '';
  respuesta1 = true;
  respuesta2 = false;
  respuesta3 = false;

  constructor(private paginationService:PaginationService
              ,private respuestasService:RespuestasService) { }

  ngOnInit(): void {
    this.IS = this.respuestasService.respuestas.IS;
    this.respuesta1 = this.respuestasService.respuestas.respuesta4;
    this.respuesta2 = this.respuestasService.respuestas.respuesta5;
    this.respuesta3 = this.respuestasService.respuestas.respuesta6;
  }

  finalizeSucced(){
    alert("Registro exitoso");
    this.paginationService.moveToPage(1);
  }

  finalizeErrors(){
    alert("Registro fallido");
    this.paginationService.moveToPage(1);
  }

}
