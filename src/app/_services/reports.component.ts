import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PeopleModel} from '../reports/reports.PeopleModel';


@Injectable({ providedIn: 'root' })
export class ReportsService {

    constructor(private http: HttpClient) {}

    responseArray : Array <PeopleModel> = [];

    reports(reportRequest:string){
          const headers = new HttpHeaders();
          headers.set('Content-Type', 'application/json');
        var url = 'http://localhost:9090/selectReport?filtroStatus='+reportRequest;
      return new Observable<Array<PeopleModel>>((observer)=>{
          this.http.get<any>(url,{headers:headers}).subscribe(data => {
              this.responseArray = [];
              data.collaboratorsLst.forEach(element => {
                this.responseArray.push(element);
              });
            observer.next(this.responseArray); 
          }, (error)=>{
              alert("Ocurrió un problema al realizar la consulta");
              observer.error(error);
          });
      });
      
   }

}