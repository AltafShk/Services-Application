import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {tap, map} from 'rxjs/operators';
import {BackendService} from '../services/backend.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) { }


  private accs = new BehaviorSubject([]);
  public share = this.accs.asObservable();

  getAccounts() {
    this.backendService.getAccounts().subscribe(val => {
      this.accs.next(val);
    })
  }

  addAccount(account){
    this.backendService.addAccount(account).subscribe(val => {console.log(val)});
    this.backendService.getAccounts().subscribe(val => {
      this.accs.next(val);
    })
  }

  updateAccount(updated_account){
    this.backendService.updateAccount(updated_account).subscribe(val => {console.log(val)});
    this.backendService.getAccounts().subscribe(val => {
      this.accs.next(val);
    })
  }

}
