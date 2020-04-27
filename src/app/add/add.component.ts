import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgModule } from '@angular/core';
import {FormControl,FormBuilder, NgForm,FormGroup} from '@angular/forms';
import {User} from 'src/app/Model/NewUser';
import {RecordService} from '../_services/add.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public userRecord:User;
  public password;
  public isError=false;
  public badPass=false;
  constructor(private fb:FormBuilder,private recordService:RecordService) {} 
  
  ngOnInit():void{
    this.userRecord=new User;
  }

  onAdd(form: NgForm){
    if (form.valid) {
      console.log(this.userRecord.is);
      if (this.userRecord.password==this.password) {
        // code...
      }
      else
      {
        this.badPass=true;
      }
    }
    else{
      this.onIsError();
    }
    /*
    this.userRecord.is=this.form.is.value;
    this.userRecord.name=this.form.name.value;
    this.userRecord.firstLastName=this.form.lastname.value;
    this.userRecord.secondLastName=this.form.lastname2.value;
    this.userRecord.email=this.form.email.value;
    this.userRecord.phone=this.form.phone.value;
    this.userRecord.password=this.form.password.value;
   
    this.recordService.record (this.userRecord);
   */
  }
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}