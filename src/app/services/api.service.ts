import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login_Det, Signup_Det } from '../angular-material.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginUrl = 'http://localhost:3000/api/users/login'
  signupUrl = 'http://localhost:3000/api/users/signup'
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  Log_In(data: Login_Det): Observable<any>{
    return this.http.post(this.loginUrl,data);
  }
  Sign_Up(data: Signup_Det): Observable<any>{
    return this.http.post(this.signupUrl,data);
  }
  LoggedIn(){
    return !!localStorage.getItem('token')
  }
  GetToken(){
    return localStorage.getItem('token')
  }
}
