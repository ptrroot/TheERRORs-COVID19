import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/pagination.service';
import { RespuestasService } from 'src/app/respuestas.service';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component implements OnInit {

  IS = '';
  respuesta = '';

  constructor(private paginationService:PaginationService
              ,private respuestasService:RespuestasService) { }

  ngOnInit(): void {
    this.IS = this.respuestasService.respuestas.IS;
    this.respuesta = this.respuestasService.respuestas.respuesta2;
  }

  next(){
    this.paginationService.moveToPage(4);
  }

}
