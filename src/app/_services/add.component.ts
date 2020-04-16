import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from 'src/app/Model/NewUser';


@Injectable({ providedIn: 'root' })
export class RecordService {

    constructor(private http: HttpClient) {}
      record(user:User) {
       console.log("Respuesta IS "+JSON.stringify(
         {
            is: user.is,
            password:user.password,
            name:user.name,
            firstLastname:user.firstLastName,
            secondLastname:user.secondLastName,
            email:user.email,
            phone:user.phone
          }
        ));

        //return this.http.post('http://70.37.82.204:9090/login', {   is:"CEPC",password:"carlospa" })
        //    .pipe(map(msj => {
        //      console.log("Respuesta"+ (msj) );
        //      return msj;
        //    }));

         // const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true' }
        //this.http.post<any>('http://70.37.82.204:9090/login', { is:"CEPC",password:"carlospa" }).subscribe(data => {
          //  console.log( data.msj);
        //});
    }

}