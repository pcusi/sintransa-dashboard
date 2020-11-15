import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { OtherService } from 'src/app/services/other.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public user: User;
  isLoading = false;

  constructor(
    private _router: Router,
    private form: FormBuilder,
    private _u: UserService,
    private _o: OtherService
  ) {
    this.user = new User('', '');
  }

  ngOnInit(): void {
    this._form();
  }

  private _form() {
    this.formGroup = this.form.group({
      username: [this.user.username, [
        Validators.required
      ]],
      password: [this.user.password, [
        Validators.required
      ]]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = `El campo ${controlName} no puede ir vacío`;
    }
    return error;
  }

  submit() {
    this._u.login(this.formGroup.value).subscribe((data: any) => {
      if (data) {
        this.setToken(data.token);
        this.setIdentity(data.usuario);
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this._router.navigate(['/inicio/dashboard']);
        }, 2000);
      } else {
        console.log('error');
      }
    }, err => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000)
      this._o.openSnack(err.error.message, '¡Entendido!', 'login-snack');
    });
  }

  setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  setIdentity(user) {
    localStorage.setItem('identity', JSON.stringify(user));
  }

  forgetPass() {
    this._router.navigate(['/olvidar-pass']);
  }

}
