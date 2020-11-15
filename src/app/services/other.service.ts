import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  public header: HttpHeaders;
  public token: any;
  public identity: any;
  public count: any;

  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  post(params: any, body: any) {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(environment.api + params, JSON.stringify(body), { headers });
  }

  get(params: any) {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.get(environment.api + params, { headers });
  }

  putToken(params: any, body: any, token?: string) {
    let headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${token}`);
    return this._http.post(environment.api + params, JSON.stringify(body), { headers });
  }

  postToken(params: any, body: any, token?: string) {
    let headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${token}`);
    return this._http.post(environment.api + params, JSON.stringify(body), { headers });
  }

  openSnack(message: any, action: any, nameClass) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: [nameClass],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token != undefined) {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != undefined) {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getCount() {
    let count = JSON.parse(localStorage.getItem('total'));
    if (count != null) {
      this.count = count;
    } else {
      this.count = null;
    }
    return this.count;
  }

  getPosition() {
    return this._http.get('../assets/json/a_position.json');
  }

  getArea() {
    return this._http.get('../assets/json/area.json');
  }

}
