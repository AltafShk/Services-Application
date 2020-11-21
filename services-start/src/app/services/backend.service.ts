import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getAccounts(){
    var data;
    data = this.http.get(this.rootURL + '/accounts');
    return data;
  }

  addAccount(account: Object){
    var new_accs;
    new_accs = this.http.post(this.rootURL + '/account', {account});
    return new_accs;
  }
  
  updateAccount(updatedAccount){
    var upd_accs;
    upd_accs = this.http.post(this.rootURL + '/update', {updatedAccount});
    return upd_accs;
  }
}
