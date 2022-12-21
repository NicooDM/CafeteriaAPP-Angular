import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuario.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  terminoUsuario: string = '';
  terminoPassword: string = '';
  log: boolean = false;
  users: Usuarios | any;
  constructor(private router: Router) {}

  logear() {
    localStorage.setItem('user', this.terminoUsuario);
    localStorage.setItem('pass', this.terminoPassword);
    this.users = {
      id: 1,
      usuario: this.terminoUsuario,
      password: this.terminoPassword,
    };

    if (this.users.usuario === 'admin' && this.users.password === 'admin') {
      this.log = true;
      console.log('log ok');
      this.terminoUsuario = '';
      this.terminoPassword = '';
      this.router.navigate(['agregar']);
    } else {
      this.router.navigate(['ingresar']);
    }
  }
}
