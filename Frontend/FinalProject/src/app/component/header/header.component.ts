import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  updateUserFormGroup!: FormGroup;
  showFiller = false;
  isAdminUser = environment.isUserAdmin;
  constructor() { }

  ngOnInit(): void {
  }

}
