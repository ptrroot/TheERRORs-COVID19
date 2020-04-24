import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/login.component';
import { PaginationService } from '../pagination.service';
import { RespuestasService } from '../respuestas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      loginForm: FormGroup;
      submitted = false;
      respuestas: {respuesta1: string 
        , respuesta2: string
        , respuesta3: string
        , respuesta4:boolean
        , respuesta5:boolean
        , respuesta6:boolean};

        constructor(private formBuilder: FormBuilder,
                    private authService: AuthenticationService
                    ,private paginationService:PaginationService
                    ,private respuestasService:RespuestasService
                  ) { }

                  ngOnInit(): void {
                    this.loginForm = this.formBuilder.group({
                      userIS: ['', Validators.required],
                      userPassword: ['', Validators.required]
                  });
                  }
                
                  newLogginSucces(){
                    this.paginationService.moveToPage(2);
                    this.respuestasService.respuestas = {
                      IS:'XDXD1'
                      ,respuesta1: '' 
                      , respuesta2: ''
                      , respuesta3: ''
                      , respuesta4:true
                      , respuesta5:false
                      , respuesta6:false};
                  }

                  editLogginSucces(){
                    this.paginationService.moveToPage(2);
                    this.respuestasService.respuestas = {
                      IS:'XDXD1'
                      ,respuesta1: 'Todos en casa estamos bien' 
                      , respuesta2: 'No he tenido contacto con un enfermo'
                      , respuesta3: 'NO'
                      , respuesta4:true
                      , respuesta5:false
                      , respuesta6:false};
                  }

                  registration(){
                    this.paginationService.moveToPage(6);
                  }

                  redirectReports(){
                    this.paginationService.moveToPage(7);
                  }

                  
                 loginLauncher(isValue:string, passValue:string){
                    this.authService.login(isValue, passValue).subscribe(result=>{
                      if(result=="OK"){
                        this.newLogginSucces();
                      }else{
                        alert('Usuario o contraseña incorrectos, intente nuevamente');
                      }

                    });
                  }


                  get f() { return this.loginForm.controls; }


        onSubmit() {
          this.submitted = true;
  
          if (this.f.userIS.status=="INVALID"||this.f.userPassword.status =="INVALID") {
              return;
          }
          this.loginLauncher(this.f.userIS.value, this.f.userPassword.value);
      }


}