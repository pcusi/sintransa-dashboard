import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private _router: Router,
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this._form();
  }

  private _form() {
    this.formGroup = this.form.group({
      email: ['', [
        Validators.required
      ]],
    });
  }

  sendEmailPass() {
    this._router.navigate(['/enviar-pass']);
  }

}
