import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private logger:LoggerService){

  }
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, name: string, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, name: this.account.name, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.logger.logStatusChanged(status);
  }
}
