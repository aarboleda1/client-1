import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(public http: Http) { }

  registerUser(user): Observable<any> {
    return this.http.post('http://localhost:8000/api/user/signup', user)
      .map(res => {
        return res.json();
      })
  }

}
