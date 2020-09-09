import { Injectable } from '@angular/core';
import { Constant } from '../constant2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 url = Constant.baseURL;

  constructor(private http: HttpClient) { }

  register(payload) {
    if((payload.mobile + "").length < 10) {
      payload.mobile = '65' + payload.mobile;
    }
    return this.http.post(this.url+'api/users/', {...payload});
  }
}
