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

    constructor(private http: HttpClient) {}

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