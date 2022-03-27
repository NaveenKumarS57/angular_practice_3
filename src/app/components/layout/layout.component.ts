import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideNavDirection } from 'src/app/angular-material.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('scroll')
  scroll!: ElementRef;
  constructor(private matSnackBar: MatSnackBar) {}
  ngOnInit(): void {
  }
  logoutsnackbar(){
    this.matSnackBar.open("You are successfully logged out",'Dismiss', { duration: 4000 });
  }
  toggleNav(nav:any){
    if(nav.opened){nav.close()}
    else{nav.open()}
  }
  scrollTop(){
    this.scroll.nativeElement.scrollTop = 0;
  }
  scrollBottom(){
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  }
}
