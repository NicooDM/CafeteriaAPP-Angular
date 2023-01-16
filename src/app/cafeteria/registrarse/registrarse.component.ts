import { Component } from '@angular/core';
import { Users } from '../interface/users.interface';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';
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
  users: Users[] | any = [];
  user: Users | any = {
    Nombre: '',
    usuario: '',
    Email: '',
    password: '',
  };
  constructor(private userService: UsersService) {}
  registrarUser() {
    this.user = {
      Nombre: this.nombreTermino,
      usuario: this.usuarioTermino,
      Email: this.emailTermino,
      password: this.passwordTermino,
    };
    this.users = this.user
      this.userService.registerUser(this.users).subscribe((resp) => {
        console.log(resp);
        
      });
      
   
  }
}
