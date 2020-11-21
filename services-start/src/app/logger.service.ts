import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logStatusChanged(status){
    console.log('A server status changed, new status: ' + status);
  }
}
