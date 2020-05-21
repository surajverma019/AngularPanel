import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //@ViewChild('form') editForm: FormGroup;
  editForm: FormGroup;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }


  user: any = {};
  genderList = [{ value: 'male', viewValue: 'Males' }, { value: 'female', viewValue: 'Females' }];

  gender: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  register() {
    this.user = Object.assign({}, this.editForm.value);
    if (this.editForm.valid) {
      setTimeout(() => this.formGroupDirective.resetForm(), 100);
    }
    else {
      alert(this.editForm);
    }
    console.log(this.user);

  }

  createRegisterForm() {
    this.editForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      firstname: [null, Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', [Validators.required]],
      country: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
      aboutMe: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

}
