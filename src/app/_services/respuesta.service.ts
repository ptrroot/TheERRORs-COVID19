import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Respuesta } from '../shared/respuesta.model';

@Injectable({ providedIn: 'root' })
export class RespuestaService{

    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStoreRespuestas(IS: string,data: Respuesta[]) {
      const postData  = { 
                              'is': IS,
                               'respuesta1': data[0]['valor'],
                               'respuesta2': data[1]['valor'],
                               'respuesta3': data[2]['valor'],
                               'respuesta4': data[3]['valor']};
      this.http
        .post<{ [key: string]: Respuesta }>(
          'http://localhost:9090/insertAnswers',
          postData,
          {
            observe: 'response'
          }
        )
        .subscribe(
          responseData => {
            alert('Registro exitoso');
          },
          error => {
            this.error.next(error.message);
            alert('Error al insertar los datos');
          }
        );
    }

    fetchRespuestas(IS : string) {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('is', IS);
        return this.http
          .get<{ [key: string]: Respuesta }>(
            'http://localhost:9090/selectAnswers',
            {
              headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'  
                                         ,'Content-Type': 'application/json'
                                         ,'Accept': 'application/json'
                                         ,'Access-Control-Allow-Credentials':'true'
                                         ,'Access-Control-Allow-Headers':'true'}),
              params: searchParams,
              responseType: 'json'
            }
          )
          .pipe(
            map(responseData => {
              const postsArray: Respuesta[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({  nombre: key, valor: responseData[key] });
                }
              }
              return postsArray;
            }),
            catchError(errorRes => {
              // Send to analytics server
              return throwError(errorRes);
            })
          );
      }
}