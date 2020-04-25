import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Respuesta } from '../shared/respuesta.model';
import { RespuestaService } from '../_services/respuesta.service';

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

  respuestaActual : string;
  preguntaActual : string;
  IS : string = 'BRGG1';
  siguientePaso : string;
  error : string;
  respuestaDefault : string;

  pagina : number = -1;

  preguntaForm : FormGroup;

  isFetching = false;
  respuestaEscrita = true;
  respuestaRadio = false;

  constructor(private respuestaService: RespuestaService) { }

  ngOnInit(): void {    

    /*this.respuestaService.fetchRespuestas(this.IS).subscribe(
      respuestas => {
        this.isFetching = false;
        this.respuestas = respuestas.slice();
        this.respuestaDefault = this.respuestas[3]['valor'] != null ? this.respuestas[3]['valor'] : 'Yo y mi familia estamos sanos'; 
        this.preguntaForm.addControl('opcion', new FormControl(this.respuestaDefault));
        this.pagina++;
        this.nextStep();
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(this.error);
      }
    );*/

    this.preguntaForm = new FormGroup({
      'respuesta': new FormControl(null, Validators.required)
    });

        this.respuestaDefault = 'Yo y mi familia estamos sanos'; 
        this.preguntaForm.addControl('opcion', new FormControl(this.respuestaDefault));
        this.pagina++;
        this.nextStep();

  }

  onSubmit(){
    this.pagina++;
    if(this.pagina == this.preguntas.length){
      //codigo para enviar a servidor la data
    }else this.nextStep();
  }

  nextStep(){
    this.preguntaActual = this.preguntas[this.pagina];
      if(this.pagina == this.preguntas.length -1)
      {
        this.respuestaEscrita = false;
        this.respuestaRadio = true;
        this.siguientePaso = 'Finalizar';
      }else {
        this.siguientePaso = 'Siguiente';
        //this.respuestaActual = this.respuestas[this.pagina]['valor'];
      }
  }
}
