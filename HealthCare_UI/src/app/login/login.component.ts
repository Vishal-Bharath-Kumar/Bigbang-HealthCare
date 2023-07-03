import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initializeLoginForm();
  }
   // Initialize login form with validators
   initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          )
        ]
      ]
    });
  }
   // Get form controls
  get formControl() {
    return this.loginForm.controls;
  }
   // Perform login action
  onLogin(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem('user-Data', JSON.stringify(this.loginForm.value));
    }
  }
}