import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtherService } from './services/other.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public token: any;

  constructor(
    private _o: OtherService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.issetToken();
  }

  issetToken() {
    this.token = this._o.getToken();
    if (this.token != null) {
      this._router.navigate(['/inicio/dashboard']);
    } else {
      this._router.navigate(['/iniciar-sesion']);
    }
  }
}
