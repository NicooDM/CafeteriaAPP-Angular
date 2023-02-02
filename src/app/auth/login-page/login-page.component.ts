import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from '../interface/usuario.interface';
import { UsersService } from 'src/app/cafeteria/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  // terminoUsuario: string = '';
  //terminoPassword: string = '';
  constructor(
    private router: Router,
    private userService: UsersService,
    private builder: FormBuilder
  ) {}
  errorlog:string='';
  users: Usuarios | any;
  userRegister: Usuarios | any;
  logUser:boolean=false;
  user: any={
    usuarios:'',
    password:'',
    id:0
  }
  loginForm = this.builder.group({
    usuario: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });
  ngOnInit() {
    
    this.errorlog='';
  
    this.userService.getUsers().subscribe((resp) => {
      this.userRegister = resp;
      console.log(this.userRegister)

      // console.log(this.userRegister[0].usuario)
      //this.userRegister.filter((item:any)=>{
        //  console.log(item.usuario)    
          //this.user = item;
      //})
    });
  }

  logear() {
    //TODO: CONTROLAR LOGIN DE USERS CON FOREACH 
    
    this.userRegister.forEach((element:any) => {
     // console.log(element)
      this.user.usuarios = element.usuario;
      this.user.password = element.password;
      this.user.id = element.id;
      
      console.log('usuarios',this.user.usuarios)
      console.log('password',this.user.password)
      if(this.loginForm.value.usuario === this.user.usuarios && this.loginForm.value.password === this.user.password){

        console.log('logeo OK')
        this.logUser=true;
        localStorage.setItem('usuario','user');
        localStorage.setItem('passwordUser','user');
        localStorage.setItem('id',this.user.id)
        this.errorlog='logeado'
        this.router.navigate(['productos'])
        localStorage.setItem('usuarioAmostrar',this.loginForm.value.usuario!)
        
  
      }
      

    });
  

  
    
    if (
      this.loginForm.value.usuario==='admin'&&this.loginForm.value.password==='admin'
      ) {
        localStorage.setItem('usuario',this.loginForm.value.usuario!);
        localStorage.setItem('passwordUser',this.loginForm.value.password!);
        
        this.errorlog = 'logeado';
        this.router.navigate(['agregar']);
        this.logUser=true;
      }
      if(this.loginForm.value.usuario==='user'&&this.loginForm.value.password==='user'){
        localStorage.setItem('usuario','user');
        localStorage.setItem('passwordUser','user');
        this.errorlog='logeado'
        this.router.navigate(['productos'])
        this.logUser=true;

      }
      if(this.loginForm.value.usuario === this.user.usuarios && this.loginForm.value.password === this.user.password){

        console.log('logeo OK')
        this.logUser=true;
       // localStorage.setItem('user','user');
       // localStorage.setItem('passwordUser','user');

      }
      else{
        this.logUser===false;
      }
      if(this.logUser===false){
      
        this.loginForm.value.password='';
        this.loginForm.value.usuario='';
        this.errorlog='noLogeado'
      }  
   
    
   
   
      /*else if(this.loginForm.value.usuario!='user'||'admin' && this.loginForm.value.password !='user'||'admin'){
        
        this.loginForm.value.password='';
        this.loginForm.value.usuario='';
        this.errorlog='noLogeado'
      }*/
  
}
}
