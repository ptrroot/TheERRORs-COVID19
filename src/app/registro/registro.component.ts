import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private paginationService:PaginationService) { }
  
  ngOnInit(): void {
  }

  SuccesRegistration(){
    alert("Registro exitoso");
    this.paginationService.moveToPage(1);
  }

  ErrorRegistration(){
    alert("Registro erroneo");
    this.paginationService.moveToPage(1);
  }

}
