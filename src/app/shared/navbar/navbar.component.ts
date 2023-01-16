import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafeteriaService } from '../../cafeteria/cafeteria.service';
import { Productos } from 'src/app/cafeteria/interface/productos.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  buscarTermino:  |any;
  log: boolean | any;
  logUser:boolean = false;
  mostrarBtn: boolean | any;
  resultado: Productos[] | any=[]
  favoritos:string[]|any=[];

  ngOnInit() {
    if (localStorage.getItem('user') && localStorage.getItem('pass')) {
      this.log = true;
      this.mostrarBtn = false;
    } else {
      this.mostrarBtn = true;
    }
    if (localStorage.getItem('user')==='user' && localStorage.getItem('pass')==='user') {
      this.log=false;
      this.logUser = true;
      this.mostrarBtn = false;
      
      this.favoritos.push(localStorage.getItem('favoritos'))
      console.log(this.favoritos)
      
    }
  }

  constructor(private router: Router,private cafeteriaService : CafeteriaService) {}
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
    this.router.navigate(['login']);
    this.mostrarBtn = true;
  }
  buscar(termino:string){
   termino = this.buscarTermino;
    this.cafeteriaService.getProductoByName(termino).subscribe((producto)=>{
      this.resultado = producto;
      console.log(this.resultado)
    })
  

  }
}
