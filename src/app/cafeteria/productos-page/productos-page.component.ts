import { Component, OnInit } from '@angular/core';
import { Productos } from '../interface/productos.interface';
import { CafeteriaService } from '../cafeteria.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.css']
})
export class ProductosPageComponent implements OnInit{
  productos : Productos[] =[]
  total : number = 0
  productoSeleccionado : string[]|any=[]
  Noseleccionado : boolean = true
  productoFavorito : string [] |any= []
  comprasGuardadas : string [] | any = []
  favoritoSeleccionado:boolean = false
  descuentoObtenido:boolean=false;
  mostrarAlert:boolean=false;
  noUser:boolean=false;
  userADM:boolean=false;
  constructor(private cafeteriaservice : CafeteriaService){}
  ngOnInit(): void {
    this.cafeteriaservice.getProductos().subscribe(producto=>this.productos = producto)
    this.Noseleccionado = true;
    
    if(localStorage.getItem('user')==='user'&&localStorage.getItem('pass')==='user'){
      this.descuentoObtenido=true;
      this.Noseleccionado = false;
      this.mostrarAlert=false
    }
    if(localStorage.getItem('user')==='user'&&localStorage.getItem('pass')==='user'){
      this.noUser=false
    }
    else{
      this.noUser=true;
    }
    if(localStorage.getItem('user')==='admin'&&localStorage.getItem('pass')==='admin'){
      this.userADM=true;
    }
  }

  pagar(){
    Swal.fire(
      'Producto Pagado!',
      'Producto abonado con exito , gracias!',
      'success'
    )
    this.total = 0
    this.productoSeleccionado=[]
    this.Noseleccionado = true;
    this.productoFavorito=[];
    this.favoritoSeleccionado=false;
    if(localStorage.getItem('user')==='user'&&localStorage.getItem('pass')==='user'){
      localStorage.setItem('compras',this.comprasGuardadas);

    }

  }

 seleccionar(index:number){
  if(localStorage.getItem('user')==='user'&&localStorage.getItem('pass')==='user'){
    const descuento:number = 0.10;
    this.total = this.total - this.productos[index].precio * descuento + this.productos[index].precio
    this.productoSeleccionado.push(this.productos[index].producto);
    this.descuentoObtenido=true;
    this.Noseleccionado = false;
    this.mostrarAlert=false
    console.log(this.descuentoObtenido);
    this.comprasGuardadas = this.productoSeleccionado;
    
  }
  else{

    this.total = this.total + this.productos[index].precio;
    this.productoSeleccionado.push(this.productos[index].producto);
    this.descuentoObtenido=false;
    this.Noseleccionado = false;
    this.mostrarAlert=true;
  }
 }
 seleccionarFavorito(index:number){
  if(localStorage.getItem('user')==='user'&&localStorage.getItem('pass')==='user'){
    this.productoFavorito.push(this.productos[index].producto)
  this.favoritoSeleccionado=true;
  
  localStorage.setItem('favoritos',JSON.stringify(this.productoFavorito))
  console.log(this.productoFavorito)
  this.noUser=false;

  }
  else{
    this.noUser=true;
  }
  
 }

}
