import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  public familyHistory = {
    cancer: false,
    heart: false,
    stroke: false,
    dementia: false,
    diabetes: false,
    depression: false
  }

  public habits = {
    gender: undefined,
    smoker: undefined,
    maritalStatus: undefined,
    activity: undefined,
    diet: undefined,
    weight: undefined
  }

  public user = {
    email: undefined,
    password: undefined,
    address: undefined,
    addressTwo: undefined,
    city: undefined,
    state: undefined,
    zip: undefined
  }

  constructor(public signupService: SignupService) { }

  ngOnInit() {
  }

  registerUser() {
    this.signupService.registerUser(this.user, this.familyHistory, this.habits)
      .subscribe(res => {
        console.log('Signup has returned the response: ', res)
      })
  }

}
