import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) {}

    login(is: string, password: string) {
       console.log("Respuesta IS"+is);
       console.log("Respuesta Password"+password);
        //return this.http.post('http://70.37.82.204:9090/login', {   is:"CEPC",password:"carlospa" })
        //    .pipe(map(msj => {
        //      console.log("Respuesta"+ JSON.stringify(msj) );
        //      return msj;
        //    }));

          const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true' }
        this.http.post<any>('http://70.37.82.204:9090/login', { is:"CEPC",password:"carlospa" }).subscribe(data => {
            console.log( data.msj);
        });
    }

}
