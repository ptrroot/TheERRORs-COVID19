import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/pagination.service';
import { RespuestasService } from 'src/app/respuestas.service';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})
export class Pregunta3Component implements OnInit {
  
  IS = '';
  respuesta = '';

  constructor(private paginationService:PaginationService
              ,private respuestasService:RespuestasService) { }

  ngOnInit(): void {
    this.IS = this.respuestasService.respuestas.IS;
    this.respuesta = this.respuestasService.respuestas.respuesta3;
  }
  
  next(){
    this.paginationService.moveToPage(5);
  }

}
