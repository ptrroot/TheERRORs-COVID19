import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      loginForm: FormGroup;
      submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
              username: ['', Validators.required],
              password: ['', Validators.required]
          });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
        this.submitted = true;
        console.log(this.f.username.value);
        console.log(this.f.password.value);
         // stop here if form is invalid
         //  if (this.loginForm.invalid) {
         //      return;
         //  }
      //  this.authenticationService.login(this.f.username.value, this.f.password.value)
        //    .pipe(first())
          //  .subscribe(
            //    data => {
              //      this.router.navigate([this.returnUrl]);
                //},
                //error => {
                  //  this.error = error;
                  //  this.loading = false;
                //});
    }

}
