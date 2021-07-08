import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  editUserFormGroup!: FormGroup;
  isEditable = true;
  isShowMoreActive = false;
  isUserProfile = true;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.editUserFormGroup = this._formBuilder.group({
      firstName: ['gdf', Validators.required],
      lastName: ['dddd', Validators.required],
      phoneNumber: ['ddd', Validators.required],
      adress: ['', Validators.required],
      postcode: ['', Validators.required]
    });
  }
}
