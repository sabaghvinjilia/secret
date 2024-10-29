import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['Irakli', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  // registrationForm=new FormGroup({
  //   username: new FormControl('Irakli'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData(){
    this.registrationForm.patchValue({
      userName: 'Irakli',
      password: 'test',
      confirmPassword: 'test',
      // address: {
      //   city: 'City',
      //   state: 'State',
      //   postalCode: '123456'
      // }
    });
  }

}
