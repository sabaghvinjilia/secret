import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChildParent';


  readData:any;

  parentFunction(data:any){
    console.log(data);
    this.readData=data;
  }
}
