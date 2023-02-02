import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logAdmin:boolean|any;
  logUser:boolean|any;
  logOut:string|any
  logeados:boolean|any
  logUserLocal:string=''
  userNav:string|any=''

 
  ngOnInit() {
   
    this.userNav=localStorage.getItem('usuarioAmostrar')
    
  

    this.logOut='';
    if (
      localStorage.getItem('usuario') === "admin" &&
      localStorage.getItem('passwordUser') === "admin"
    ) {
      this.logAdmin=true;
      this.logeados=true;
      this.logOut='logout';
      this.logUserLocal='admin';
    }
    if (
      localStorage.getItem('usuario') &&
      localStorage.getItem('passwordUser') 
    ) {
      this.logUser=true;
      this.logAdmin=false;
      this.logeados=true;
      this.logOut='logout';
      this.logUserLocal='user';
      
      
      

      
    } 
   
  }

  constructor(private router: Router) {}
  logout() {
 
    localStorage.removeItem('usuario');
    localStorage.removeItem('passwordUser');
    localStorage.removeItem('id');
    this.logAdmin=false;
    this.logUser=false;
    this.logOut='';
    this.logeados=false;
    this.logUserLocal='';
    this.router.navigate(['login'])
    localStorage.removeItem('usuarioAmostrar')
    this.userNav=''


    
  }

}
