import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(public signupService: SignupService) { }

  ngOnInit() {
  }

  registerUser() {
    this.signupService.registerUser()
      .subscribe(res => {
        console.log('Signup has returned the response: ', res)
      })
  }

}
