import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Usuario } from '../shared/usuario.model';
import { Respuesta } from '../shared/respuesta.model';

@Injectable({ providedIn: 'root' })
export class RegistroService{

    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStoreUsuario(IS: string, 
                          nombre : string,
                          pass : string,
                          apellidoP : string,
                          apellidoM :string,
                          correo : string,
                          tel : string) {
      const postData  = { 
                              'is': IS,
                               'password': pass,
                               'name': nombre,
                               'firstLastName': apellidoP,
                               'secondLastName': apellidoM,
                               'email': correo,
                               'phone': tel};
                               console.log(postData);
      this.http
        .post<{ [key: string]: Respuesta }>(
          'http://localhost:9090/userRegister',
          postData,
          {
            observe: 'response'
          }
        )
        .subscribe(
          responseData => {
            alert(responseData );
            console.log(responseData);
          },
          error => {
            this.error.next(error.message);
            alert('Error al insertar los datos' + error.message);
          }
        );
    }
}