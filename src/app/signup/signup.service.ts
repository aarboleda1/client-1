import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(public http: Http) { }

  registerUser(user, familyHistory, habits): Observable<any> {
    let finalUser = {
      user: user,
      familyHistory: familyHistory,
      habits: habits
    }

    return this.http.post('/api/user/signup', finalUser)
      .map(res => {
        return res.json();
      })
  }

}
