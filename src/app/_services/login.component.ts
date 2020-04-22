import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) {}

     login(is: string, password: string){
          const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Credentials':'true','Access-Control-Allow-Headers':true}
        return new Observable((observer)=>{
            this.http.post<any>('http://localhost:9090/login', { is,password}).subscribe(data => {
                observer.next(data.msg);
            }, (error)=>{
                alert("Ocurrió un problema al realizar la autenticación");
                observer.error(error);
            });
        });
        
     }

}
