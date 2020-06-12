import { Injectable } from '@angular/core';
import { Constant } from '../constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 url = Constant.baseURL;

  constructor(private http: HttpClient) { }

  register(payload) {
    return this.http.post(this.url+'api/users/', {...payload});
  }
}
