import { Component } from '@angular/core';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:Users [] = [
    {
      FirstName: 'Giorgi',
      LastName: 'Giorgadze'
    },
    {
      FirstName: 'Davit',
      LastName: 'Grdzelidze'
    },
    {
      FirstName: 'Levan',
      LastName: 'Adamashvili'
    },
    {
      FirstName: 'Giorgi',
      LastName: 'Qebadze'
    },
    {
      FirstName: 'Giorgi',
      LastName: 'Mesxi'
    },
    {
      FirstName: 'Shota',
      LastName: 'Gelovani'
    },
  ]
}
