import { Component, OnInit } from '@angular/core';
import { Productos } from '../interface/productos.interface';
import { CafeteriaService } from '../cafeteria.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { Favoritos } from '../interface/favoritos.interface';
import { Compras } from '../interface/compras.interface';
@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.css'],
})
export class ProductosPageComponent implements OnInit {
  productos: Productos[] | any = [];
  productosAcom:Productos[]|any=[]
  productosInfu:Productos[]|any=[]
  productosProm:Productos[]|any=[]
  productoFavoritos:Favoritos[]|any={
    producto:'',
    user:localStorage.getItem('id')
    
  };
  comprasNoUser:[]|any=[
    {
      producto:'',
      precio:0
    }
  ]
  total: number = 0;
  productoSeleccionado: Compras[] | any = [];
  Noseleccionado: boolean = true;
  productoFavorito: Favoritos[] =[]
  comprasGuardadas: Compras[]|any = {
    producto:'',
    user: localStorage.getItem('id')
    
    
  };
  favoritoSeleccionado: boolean = false;
  descuentoObtenido: boolean = false;
  mostrarAlert: boolean = false;
  mostrarFav: boolean = false;
  noUser: boolean = false;
  userADM: boolean = false;
  existeLocal:[]|any;
  filter:string=''
  filtroIngredientes:[]|any=[]
  constructor(private cafeteriaservice: CafeteriaService,private router:Router) {}
  ngOnInit(): void {
    this.existeLocal=[]
    this.cafeteriaservice.getProductos().subscribe((producto)=>{
      this.productos=producto
    
      this.productos.forEach((element:any )=> {
       
        if(element.tipo==='Infusiones'){
          this.productosInfu.push(element);
          
        }
        if(element.tipo==='Acompañamientos'){
          this.productosAcom.push(element);
          
        }
        if(element.tipo==='Promociones'){
          this.productosProm.push(element);
          
        }

      });
     
      
    })
    this.Noseleccionado = true;
    this.mostrarFav = true;
    

    if (
      localStorage.getItem('usuario')&&
      localStorage.getItem('passwordUser')
    ) {
      this.descuentoObtenido = true;
      this.Noseleccionado = false;
      this.mostrarAlert = false;
      this.mostrarFav = false;
      this.existeLocal=[localStorage.getItem('usuario'),localStorage.getItem('passwordUser')]
    }
    if (
      localStorage.getItem('usuario')=='user'&&
      localStorage.getItem('passwordUser')=='user'
    ) {
      this.noUser = false;
      this.mostrarFav = false;
    } else {
      this.noUser = true;
    }
    if (
      localStorage.getItem('usuario') === 'admin' &&
      localStorage.getItem('passwordUser') === 'admin'
      
    ) {
      this.userADM = true;
      this.mostrarFav = false;
      this.existeLocal=[localStorage.getItem('usuario'),localStorage.getItem('passwordUser')]
    }
   
   this.productoFavorito=[]
  
  
    
  }

  pagar() {
  
    if(this.existeLocal.length===0){
      this.router.navigate(['login'])
      localStorage.setItem('compra',this.comprasNoUser)
    }
    else{

      Swal.fire(
        'Producto Pagado!',
        'Producto abonado con exito , gracias!',
        'success'
      );
      this.total = 0;
      this.productoSeleccionado = [];
      this.Noseleccionado = true;
      this.productoFavorito = [];
      this.favoritoSeleccionado = false;
      this.mostrarAlert = false;
      this.cafeteriaservice.agregarCompra(this.comprasGuardadas).subscribe((resp)=>{console.log(resp)
        
      
      })

    }
    

    
  
  }

  seleccionarInfu(index: number) {
    if (
      localStorage.getItem('usuario')&&
      localStorage.getItem('passwordUser')
    ) {
      const descuento: number = 0.1;
      this.total =
      this.total -
      this.productos[index].precio * descuento +
      this.productos[index].precio;
      this.productoSeleccionado.push(this.productos[index].producto);
      this.descuentoObtenido = true;
      this.Noseleccionado = false;
      this.mostrarAlert = false;
  
      this.comprasGuardadas.producto = this.productoSeleccionado
      this.comprasNoUser.producto = this.productoSeleccionado
      this.comprasNoUser.precio = this.comprasNoUser.precio + this.productos[index].precio
  
      
    } else {
      this.total = this.total + this.productos[index].precio;
      this.productoSeleccionado.push(this.productos[index].producto);
      this.descuentoObtenido = false;
      this.Noseleccionado = false;
      this.mostrarAlert = true;
      this.comprasNoUser.push(this.productoSeleccionado)
      
    }
  }
  seleccionarAcom(index: number) {
    if (
      localStorage.getItem('usuario')&&
      localStorage.getItem('passwordUser') 
    ) {
      const descuento: number = 0.1;
      this.total =
      this.total -
      this.productosAcom[index].precio * descuento +
      this.productosAcom[index].precio;
      this.productoSeleccionado.push(this.productosAcom[index].producto);
      this.descuentoObtenido = true;
      this.Noseleccionado = false;
      this.mostrarAlert = false;
      this.comprasNoUser.push(this.productoSeleccionado)
  
      this.comprasGuardadas.producto = this.productoSeleccionado
    
      
    } else {
      this.total = this.total + this.productosAcom[index].precio;
      this.productoSeleccionado.push(this.productosAcom[index].producto);
      this.comprasNoUser.producto = this.productoSeleccionado
      this.comprasNoUser.precio = this.comprasNoUser.precio + this.productosAcom[index].precio
      this.comprasNoUser.push(this.productoSeleccionado)
      this.descuentoObtenido = false;
      this.Noseleccionado = false;
      this.mostrarAlert = true;
      
    }
  }
  seleccionarProm(index: number) {
    if (
      localStorage.getItem('usuario')=='user' &&
      localStorage.getItem('passwordUser')=='user' 
    ) {
      const descuento: number = 0.1;
      this.total =
      this.total -
      this.productosProm[index].precio * descuento +
      this.productosProm[index].precio;
      this.productoSeleccionado.push(this.productosProm[index].producto);
      this.descuentoObtenido = true;
      this.Noseleccionado = false;
      this.mostrarAlert = false;
      this.comprasNoUser = this.productoSeleccionado
  
      this.comprasGuardadas.producto = this.productoSeleccionado
      
      
    } else {
      this.total = this.total + this.productosProm[index].precio;
      this.productoSeleccionado.push(this.productosProm[index].producto);
      this.comprasNoUser.producto = this.productoSeleccionado
      this.comprasNoUser.precio = this.comprasNoUser.precio + this.productosProm[index].precio
      this.descuentoObtenido = false;
      this.Noseleccionado = false;
      this.mostrarAlert = true;
      
    }
  }
  seleccionarFavoritoInfu(index: number) {
    if (
      localStorage.getItem('usuario')&&
      localStorage.getItem('passwordUser')
    ) {
       
     
      
    this.productoFavoritos.producto = this.productos[index].producto

      this.cafeteriaservice.agregarFavorito(this.productoFavoritos).subscribe((resp)=>{
        
      })
      
    
   
      this.noUser = false;
    } else {
      this.noUser = true;
    }

  }
  seleccionarFavoritoAcom(index: number) {
    if (
      localStorage.getItem('usuario')&&
      localStorage.getItem('passwordUser')
    ) {
       
     
  
    this.productoFavoritos.producto = this.productosAcom[index].producto

      this.cafeteriaservice.agregarFavorito(this.productoFavoritos).subscribe((resp)=>{
      
      })
      
    
   
      this.noUser = false;
    } else {
      this.noUser = true;
    }

  }
  seleccionarFavoritoProm(index: number) {
    if (
      localStorage.getItem('usuario')&&
      localStorage.getItem('passwordUser')
    ) {
       
     
    
    this.productoFavoritos.producto = this.productosProm[index].producto

      this.cafeteriaservice.agregarFavorito(this.productoFavoritos).subscribe((resp)=>{
       
      })
      
   
      this.noUser = false;
    } else {
      this.noUser = true;
    }

  }
  buscarFiltro(index:any){
    this.filtroIngredientes=this.productos[index].descripcion 
    


  }
}
