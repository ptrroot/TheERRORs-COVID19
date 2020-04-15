import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/login.component';

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
                  ) { }

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
         // stop here if form is invalid
         //  if (this.loginForm.invalid) {
         //      return;
         //  }
            this.authService.login(this.f.username.value, this.f.password.value);
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
