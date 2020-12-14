import { Component, OnInit } from '@angular/core';
import { Afiliates } from 'src/app/classes/Afiliates';
import { AfiliatesService } from 'src/app/services/afiliates.service';
import {MatDialog} from '@angular/material/dialog';
import {AfiliateFormComponent} from '../../dialogs/afiliate-form/afiliate-form.component';

@Component({
  selector: 'app-afiliates',
  templateUrl: './afiliates.component.html',
  styleUrls: ['./afiliates.component.scss']
})
export class AfiliatesComponent implements OnInit {

  public afi: Afiliates[] = [];
  public tabIndex = 0;
  isForm = false;

  constructor(
    private _a: AfiliatesService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAfiliates();
  }

  getAfiliates() {
    this._a.getAfiliates().subscribe((data: any) => {
      this.afi = data.afiliados;
      console.log(data);
    });
  }

  getId(id) {
    console.log(id);
  }

  newAfiliate() {
    const afiForm = this._dialog.open(AfiliateFormComponent, {
      position: {
        top: '70px'
      }
    });
    return afiForm;
  }

}
