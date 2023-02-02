import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './interface/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.url}/usuariosNormal`);
  }
  registerUser(usuario: Users) {
    return this.http.post<Users[]>(`${this.url}/usuariosNormal`, usuario);
  }
}
