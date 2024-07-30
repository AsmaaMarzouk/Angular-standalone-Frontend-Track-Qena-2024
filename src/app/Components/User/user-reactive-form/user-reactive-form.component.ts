import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss',
})
export class UserReactiveFormComponent {
  userformGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userformGroup=new FormGroup({
    //   firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   lastName:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]{3,}')]),
    //   email:new FormControl('',[Validators.required]),
    // });

    this.userformGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: this.fb.array([]),
    });
  }

  get firstName() {
    return this.userformGroup.get('firstName');
  }
  get lastName() {
    return this.userformGroup.get('lastName');
  }
  get email() {
    return this.userformGroup.get('email');
  }

  get address(): FormArray {
    return this.userformGroup.get('address') as FormArray;
  }

  // get street(){
  //   return this.userformGroup.get('street');
  // }
  // get city(){
  //   return this.userformGroup.get('city');
  // }

  // array => group => controls
  newAddrees(): FormGroup {

    // controls
    return this.fb.group({
      street: [''],
      city: [''],
    });
  }

  // [{street:,city:},{}]
  addnewAdd() {
    this.address.push(this.newAddrees());
  }

  removeGroup(item:number){
    this.address.removeAt(item)
  }
  // add
  // u:user{
  // firstName:firstName.value
  // firstName:firstName.value
  // firstName:firstName.value

  // }
}
