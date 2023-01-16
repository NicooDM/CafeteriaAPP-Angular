import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuario.interface';
import { UsersService } from 'src/app/cafeteria/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit{
  terminoUsuario: string = '';
  terminoPassword: string = '';
  errorlog: boolean = false;
  users: Usuarios |any;
  userRegister: Usuarios |any;
  constructor(private router: Router, private userService : UsersService) {}
  ngOnInit(){
   /* this.userService.getUsers().subscribe(resp=>{
     
      console.log(resp)
    })*/
  }

  logear() {
    localStorage.setItem('user', this.terminoUsuario);
    localStorage.setItem('pass', this.terminoPassword);
    this.users = {
      id: 1,
      usuario: this.terminoUsuario,
      password: this.terminoPassword,
    };
    if (
      localStorage.getItem('user') === 'admin' &&
      localStorage.getItem('pass') === 'admin'
    ) {
      this.errorlog = false;
      this.router.navigate(['agregar']);
    } else {
      this.errorlog = true;
      this.terminoUsuario = '';
      this.terminoPassword = '';
    }
    if (
      localStorage.getItem('user') === 'user' &&
      localStorage.getItem('pass') === 'user'
    ) {
      this.errorlog = false;
      this.router.navigate(['productos']);
    }
  }
}
