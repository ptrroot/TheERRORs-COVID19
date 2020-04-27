import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Respuesta } from '../shared/respuesta.model';
import { RespuestaService } from '../_services/respuesta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/login.component';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
  providers: [RespuestaService]
})
export class PreguntaComponent implements OnInit {

  opciones = [
    'Yo y mi familia estamos sanos',
    'Mi familia o yo presentamos almenos tres de los sintomas',
    'Mi familia o yo tenemos COVID',
  ];

  preguntas = [
    '¿Cómo se siente tu y tu familia?'
    ,'¿Has tenido contacto con alguien contagiado o sospechoso de tener COVID 19?'
    ,'¿Has salido de casa?, si la respuesta es si ¿Para que?'
    ,'Deacuerdo a tus respuestas anteriores ¿Tu y tu familia estan sanos?'
  ];

  respuestas : Respuesta[] = [];

  preguntaActual : string;
  IS : string;
  siguientePaso : string;
  error : string;
  respuestaDefault : string;

  pagina : number = -1;

  preguntaForm : FormGroup;

  isFetching = false;
  respuestaEscrita = true;
  respuestaRadio = false;

  constructor(private respuestaService: RespuestaService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
    ,private router: Router) { }

  ngOnInit(): void {    
    /*
    this.respuestaService.fetchRespuestas(this.IS).subscribe(
      respuestas => {
        this.isFetching = false;
        this.respuestas = respuestas.slice();
        this.respuestaDefault = this.respuestas[3]['valor'] != null ? this.respuestas[3]['valor'] : 'Yo y mi familia estamos sanos'; 
        this.preguntaForm.addControl('opcion', new FormControl(this.respuestaDefault, Validators.required));
        this.pagina++;
        this.nextStep();
        console.log(this.respuestas);
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(this.error);
      }
    );*/

    this.IS = this.route.snapshot.params['is'];
    this.preguntaForm = new FormGroup({
      'respuesta': new FormControl(null, Validators.required),
      'opcion': new FormControl('Yo y mi familia estamos sanos', Validators.required)
    });
    this.pagina++;
    this.nextStep();
  }

  onSubmit(){
    if(this.pagina == this.preguntas.length - 1 ){
      this.respuestas[this.pagina]['valor'] = this.preguntaForm.get('opcion').value;
    }
    else {
      this.respuestas[this.pagina]['valor'] = this.preguntaForm.get('respuesta').value;
      this.preguntaForm.get('respuesta').reset();
    }
    this.pagina++;
    if(this.pagina > this.preguntas.length - 1){
      this.respuestaService.createAndStoreRespuestas(this.IS, this.respuestas);
      this.authService.loggedIn = false;
      this.router.navigate(['/']);
    }else {
      this.nextStep();
    }
  }

  nextStep(){
    this.preguntaActual = this.preguntas[this.pagina];
      if(this.pagina == this.preguntas.length -1)
      {
        this.respuestaEscrita = false;
        this.respuestaRadio = true;
        this.siguientePaso = 'Finalizar';

        this.preguntaForm.patchValue({
            'respuesta': 'Dummie',
        });
      }else {
        this.siguientePaso = 'Siguiente';
      }
  }
}
