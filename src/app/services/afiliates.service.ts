import { Injectable } from '@angular/core';
import { OtherService } from './other.service';
import {Afiliates} from '../classes/Afiliates';

@Injectable({
  providedIn: 'root'
})
export class AfiliatesService {

  constructor(
    private _o: OtherService
  ) { }

  getAfiliates() {
    return this._o.get('afiliates');
  }

  countAfiliates() {
    return this._o.get('count-afiliates');
  }

  insertAfiliate(afiliate: Afiliates, token: any) {
    return this._o.postToken('new-afiliate', afiliate, token);
  }

}
