import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/pagination.service';
import { RespuestasService } from '../../respuestas.service';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component implements OnInit {

  IS = '';
  respuesta = '';

  constructor(private paginationService:PaginationService
              ,private respuestasService:RespuestasService) { }

  ngOnInit(): void {
    this.IS = this.respuestasService.respuestas.IS;
    this.respuesta = this.respuestasService.respuestas.respuesta1;
  }

  next(){
    this.paginationService.moveToPage(3);
  }

}
