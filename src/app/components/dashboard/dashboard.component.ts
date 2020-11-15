import { Component, OnInit } from '@angular/core';
import { OtherService } from 'src/app/services/other.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public identity: any;
  public count: any;

  constructor(
    // tslint:disable-next-line:variable-name
    private _o: OtherService
  ) {
    this.identity = this._o.getIdentity();
    this.count = this._o.getCount();
  }

  ngOnInit(): void {
  }

}
