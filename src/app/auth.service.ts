import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl: string = 'http://localhost:54763/api/auth/'

  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post(this.baseUrl+'register', user);
  }

  login(user: any){
    return this.http.post(this.baseUrl+'login', user);
  }
}
