import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public expectency = {
    age: 42,
    smoke: true,
    drink: 100,
    activity: 0,
    weight: 300,
    
  }

  constructor() { }

  ngOnInit() {
  }

}
