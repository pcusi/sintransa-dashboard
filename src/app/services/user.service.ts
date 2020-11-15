import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { OtherService } from './other.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _o: OtherService
  ) { }

  login(user: User) {
    return this._o.post('login', user);
  }

}
