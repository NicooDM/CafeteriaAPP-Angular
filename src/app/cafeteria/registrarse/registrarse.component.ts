import { Component } from '@angular/core';
import { Users } from '../interface/users.interface';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent {
  nombreTermino: string = '';
  usuarioTermino: string = '';
  emailTermino: string = '';
  passwordTermino: string = '';
  regError: boolean = false;
  mensajeAlert:boolean=false;
  users: Users[] | any = [];
  user: Users | any = {
    Nombre: '',
    usuario: '',
    Email: '',
    password: '',
  };
  constructor(private userService: UsersService, private router : Router) {}
  registrarUser() {
    this.user = {
      Nombre: this.nombreTermino,
      usuario: this.usuarioTermino,
      Email: this.emailTermino,
      password: this.passwordTermino,
    };
    this.users = this.user;
    this.userService.registerUser(this.users).subscribe((resp) => {
      this.mensajeAlert=true;
      this.nombreTermino=''
      this.usuarioTermino=''
      this.emailTermino=''
      this.passwordTermino=''
      console.log(resp);
      
    });
  }
}
