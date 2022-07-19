import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public showPassword = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        password2: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatches('password', 'password2'),
      }
    );
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    const values = form.value;
    if (!values['username'] && !values['password']) return;
    this.registerForm.disable();
    this.registerAndLogIn(values['username'], values['password']);
    console.log(values);
  }

  registerAndLogIn(username: string, password: string) {
    this.authService.register(username, password);
  }

  changePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  passwordMatches(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      console.log(control, matchingControl);
      if (
        matchingControl.errors &&
        !matchingControl.errors['passwordsDontMatch']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordsDontMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
