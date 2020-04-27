import { Component, OnInit } from '@angular/core';
import {PeopleModel} from './reports.PeopleModel';
import { ReportsService } from '../_services/reports.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private reportService :ReportsService) { }

  personArray: Array<PeopleModel> = [];
  ngOnInit(): void {
  }

  showHealthy(){
    this.sendingRequest('Sí');
    
  }

  showWarning(){
    this.sendingRequest('Mi familia o yo presentan al menos tres de los síntomas');
  }

  showInfected(){
    this.sendingRequest('Mi familia o yo tenemos COVID-19');
  }

  sendingRequest(parameter:string){
    this.personArray =[];
    this.reportService.reports(parameter).subscribe(result=>{
      if(result){
        console.log(result);
        result.forEach(person=>{
          this.personArray.push(person);
        });
      }else{
        alert("Error al realizar la consulta");
      }
      
    });
  }


}
