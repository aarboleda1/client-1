import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(public http: Http) { }

  public user = {
    email: undefined,
    password: undefined,
    address: undefined,
    addressTwo: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    gender: undefined,
    smoker: undefined,
    drinker: undefined,
    maritalStatus: undefined,
    activity: undefined,
    diet: undefined,
    weight: undefined,
    cancer: false,
    heart: false,
    stroke: false,
    dementia: false,
    diabetes: false,
    depression: false
  }

  registerUser(): Observable<any> {
    console.log('user', this.user)
    return this.http.post('http://localhost:8000/api/user/signup', this.user)
      .map(res => {
        return res.json();
      })
  }

}
