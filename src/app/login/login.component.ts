import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService
    ,private router: Router
  ) { }

s
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userIS: ['', Validators.required],
      userPassword: ['', Validators.required]
  });
  }


  loginLauncher(isValue: string, passValue: string) {
    this.authService.login(isValue, passValue).subscribe(result => {
      if (result == "OK") {
        this.router.navigate(['pregunta',this.loginForm.get('userIS').value]);
      } else {
        alert('Usuario o contraseña incorrectos, intente nuevamente');
      }
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.f.userIS.status=="INVALID"||this.f.userPassword.status =="INVALID") {
        return;
    }
    this.loginLauncher(this.f.userIS.value, this.f.userPassword.value);
  }

}