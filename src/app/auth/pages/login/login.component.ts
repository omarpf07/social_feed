import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showPassword = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    const values = form.value;
    if (!values['username'] && !values['password']) return;
    this.loginForm.disable();
    this.logUserIn(values['username'], values['password']);
    console.log(values);
  }

  logUserIn(username: string, password: string) {
    this.authService.authenticate(username, password);
  }

  changePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
