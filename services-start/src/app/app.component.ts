import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './services/user.service';
import{BackendService} from './services/backend.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: any[]=[]

  constructor(private userService: UserService, private backendService: BackendService){
    this.userService.share.subscribe(val => {this.accounts = val});
  }

  ngOnInit(){
    this.userService.getAccounts();
    this.userService.share.subscribe(val => {this.accounts = val});
  }


  onStatusChanged(updateInfo: {id: number, name: string, newStatus: string}) {
    this.userService.updateAccount(updateInfo);
  }
}
