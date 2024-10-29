import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentChild';


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
}
