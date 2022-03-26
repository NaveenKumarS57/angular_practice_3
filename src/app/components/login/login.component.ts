import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { ApiService } from 'src/app/services/api.service';
// import { Login_Det } from 'src/app/angular-material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = this.formBuilder.group({
      mailid:[''],
      password:['']
    })
    // this.loadpost();
  }
  // Login method define localStorage.setItem('token', res.token);

  // Login(){
  //   this.http.post('http://localhost:3000/api/users/login',this.loginForm.value).subscribe((res)=>{
  //     alert(JSON.stringify(res));
  //   })
  Login(){
    this.api.Log_In(this.loginForm.value).subscribe((res)=>{
      // alert(JSON.stringify(res));
      if(res.token){
        this.matSnackBar.open("You are uccessfully Logged In",'Okay', { duration: 4000 });
        this.loginForm.reset();
        this.router.navigate(['home']);
        localStorage.setItem('token',res.token);
      }
      else{
        this.matSnackBar.open("Not valid mail id or password",'Okay', { duration: 4000 });
        this.loginForm.reset();
      }

    },err=>{
      this.matSnackBar.open("something went wrong",'sorry', { duration: 4000 });
    });
  }
}
// function res(res: any): ((value: any) => void) | Partial<import("rxjs").Observer<any>> | null | undefined {
//   throw new Error('Function not implemented.');
// }

