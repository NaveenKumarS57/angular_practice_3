import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Database, Login_Det, Signup_Det } from '../angular-material.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginUrl = 'http://localhost:3000/api/users/login'
  signupUrl = 'http://localhost:3000/api/users/signup'
  baseUrl = 'http://localhost:3000/api/users'

  closeResult= '';

  constructor(private http: HttpClient,
    private modalService: NgbModal) { }

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
  getData(): Observable<any>{
    return this.http.get(this.baseUrl)
  }
  UpdateData(data: Signup_Det): Observable<any>{
    return this.http.post(this.signupUrl,data);
  }
  DeleteData(data: any):Observable<any>{
    return this.http.delete(this.baseUrl,data);
  }
  open(content: any){
    return this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{
        return this.closeResult = `Closed with: ${result}`;
      } ,(reason)=>{
        return this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }
  private getDismissReason(reason:any):string {
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    }
    else if(reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on the backdrop';
    }
    else{
      return `with: ${reason}`;
    }
  }
}
