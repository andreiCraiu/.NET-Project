import { Injectable } from '@angular/core';
import { User} from '../model/User';

@Injectable()
export class StorageService {
  private getItem(key: any) {
    return localStorage.getItem(key);
  }

  private removeItem(key: string) {
    localStorage.removeItem(key);
  }

  private setItem(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  clear() {
    localStorage.clear();
  }

  setLoggedInUser(loggedInUser: any) {
    this.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }

  getLoggedInUser() {
    var loginUser = this.getItem('loggedInUser');
    return <User>JSON.parse(<string>loginUser);
  }
}