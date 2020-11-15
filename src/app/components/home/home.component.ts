import { Component, OnInit } from '@angular/core';
import { AfiliatesService } from 'src/app/services/afiliates.service';
import { OtherService } from 'src/app/services/other.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links = [
    { name: 'Inicio', router: '/inicio/dashboard' },
    { name: 'Afiliados', router: '/inicio/afiliados' },
    { name: 'Documentos', router: '/inicio/documentos' }
  ];

  sidecard = [
    { icon: 'assets/images/afiliados.svg', title: 'Afiliados', count: '220' },
    { icon: 'assets/images/document.svg', title: 'Documentos', count: '10' },
  ]

  public identity: any;
  public count: any;

  constructor(
    private _o: OtherService,
    private _a: AfiliatesService,
    private _router: Router
  ) {
    this.identity = this._o.getIdentity();
  }

  ngOnInit(): void {
    this.countAfiliates();
  }

  countAfiliates() {
    this._a.countAfiliates().subscribe((data: any) => {
      this.count = data.count;
      this.setCount(data.count);
    });
  }

  setCount(total) {
    localStorage.setItem('total', JSON.stringify(total));
  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
