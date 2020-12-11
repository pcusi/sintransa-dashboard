import { Component, OnInit } from '@angular/core';
import {OtherService} from '../../services/other.service';
import {AfiliatesService} from '../../services/afiliates.service';
import {Afiliates} from '../../classes/Afiliates';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../services/upload.service';
import {environment} from '../../../environments/environment';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-afiliate-form',
  templateUrl: './afiliate-form.component.html',
  styleUrls: ['./afiliate-form.component.scss']
})
export class AfiliateFormComponent implements OnInit {

  a_position = [];
  area = [];
  public formGroup: FormGroup;
  public image: any;
  public afiliates: Afiliates;
  public token: any;
  public file: Array<File>;

  constructor(
    private _o: OtherService,
    private _a: AfiliatesService,
    private form: FormBuilder,
    private _u: UploadService,
    private _ref: MatDialogRef<AfiliateFormComponent>
  ) {
    this.afiliates = new Afiliates('', '','','', '','', '');
    this.token = this._o.getToken();
  }

  ngOnInit(): void {
    this.getPosition();
    this.getArea();
    this._form();
  }

  getPosition() {
    this._o.getPosition().subscribe((data: any) => {
        this.a_position = data.position;
    });
  }

  getArea() {
    this._o.getArea().subscribe((data: any) => {
        this.area = data.area;
    });
  }

  private _form() {
    this.formGroup = this.form.group({
      names: [this.afiliates.names, [Validators.required]],
      lastnames: [this.afiliates.lastnames, [Validators.required]],
      address: this.afiliates.address,
      area: [this.afiliates.area, [Validators.required]],
      a_position: [this.afiliates.a_position, [Validators.required]],
      phone: this.afiliates.phone,
      dni: [this.afiliates.dni, [Validators.required]]
    });
  }

  submit(form) {
    this._a.insertAfiliate(this.formGroup.value, this.token).subscribe((data: any) => {
        if (data) {
          this._u.makeFileRequest(environment.api+'upload-photo/'+ data.afiliateId, [], this.file, 'photo')
            .then((result: any) => {
              form.reset();
              this._ref.close();
              this._o.openSnack('¡Afiliado registrado!', 'Ok', 'login-snack');
          });
        }
    });
  }

  selectedFile(e) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
    }
  }

  fileChange(fileInput: any) {
    this.file = <Array<File>>fileInput.target.files;
  }

}
