import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroService } from '../_services/registro.service';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @ViewChild('f',{static : false}) signUpForm : NgForm;
  constructor(private regiService: RegistroService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.regiService.createAndStoreUsuario(
                  this.signUpForm.value['IS']
                  ,this.signUpForm.value['NOMBRE']
                  ,this.signUpForm.value['PASS']
                  ,this.signUpForm.value['APELLIDOP']
                  ,this.signUpForm.value['APELLIDOM']
                  ,this.signUpForm.value['CORREO']
                  ,this.signUpForm.value['TEL']
    );
  }

}
