import { Component, OnInit } from '@angular/core';

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

  logHistory() {
    console.log(this.familyHistory)
  }


  constructor() { }

  ngOnInit() {
  }

}
