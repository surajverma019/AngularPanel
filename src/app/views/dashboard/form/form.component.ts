import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: any = {};
  genderList = [{ value: 'male', viewValue: 'Males' }, { value: 'female', viewValue: 'Females' }];

  gender: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.user);
    alert(JSON.stringify(this.user))
  }

}
