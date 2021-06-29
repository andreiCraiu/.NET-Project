import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { ApplicationUserLogin } from 'src/app/model/loginUser';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  public email: string = '';
  public password: string = '';


  constructor(
    private authenticateService: AuthenticationService,
    private storageService: StorageService
  ) { }

  login() {
    var user = {
      email: this.email,
      password: this.password
    };

    this.authenticateService.authorizeUser(user).subscribe(response => {
      this.storageService.setLoggedInUser(response);
    })

  }


  ngOnInit(): void {
  }

}
