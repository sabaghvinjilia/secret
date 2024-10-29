import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  users: User[] = [
    {
      name:'Peter',
      age: 19,
      email: 'peter@gmail.com'
    },
    {
      name:'Gwen',
      age: 18,
      email: 'gwen@gmail.com'
    },
    {
      name:'Norman',
      age: 45,
      email: 'norman@gmail.com'
    }
  ]

  sendData(){
    this.parentFunction.emit(this.users);
  }
}
