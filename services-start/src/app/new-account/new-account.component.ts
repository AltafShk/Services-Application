import { Component, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../logger.service';
import { BackendService } from '../services/backend.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private logger: LoggerService, private userService: UserService, private backendService: BackendService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
   
    this.userService.addAccount(
      {
          name: accountName,
          status: accountStatus
      }
    );
    this.logger.logStatusChanged(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
