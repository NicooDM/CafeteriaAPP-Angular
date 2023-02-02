import { Component, OnInit } from '@angular/core';
import { Productos } from '../interface/productos.interface';
import { CafeteriaService } from '../cafeteria.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-page',
  templateUrl: './agregar-page.component.html',
  styleUrls: ['./agregar-page.component.css'],
})
export class AgregarPageComponent implements OnInit {
  modificar: boolean = false;
  incompleted: boolean = false;
  productos: Productos[] |any= [];
  producto: Productos |any = {
    producto: '',
    precio: 0,
    cantidad: 0,
    descripcion: '',
    tipo: ''
  };

  constructor(
    private cafeteriaService: CafeteriaService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.cafeteriaService.getProductos().subscribe((prod) => {
     
      this.productos = prod;
      console.log(this.productos.producto)
    });
    
  
  }
  agregarProducto() {
    if (this.producto.producto.trim().length === 0) {
      this.incompleted = true;
      return;
    }
    if (this.producto.id) {
      this.modificar = true;
      this.cafeteriaService.editarProductos(this.producto).subscribe((resp) => {
        console.log(resp);
      });
      Swal.fire(
        'Producto Actualizado',
        'producto actualizado con exito',
        'success'
      );
      this.producto = '';
      this.route.navigate(['productos']);
    } else if (this.producto.precio > 0) {
      this.cafeteriaService
        .agregarProductos(this.producto)
        .subscribe((resp) => console.log(resp));
      Swal.fire('Producto Guardado', 'producto guardado con exito', 'success');
      this.producto = '';
      this.route.navigate(['productos']);
    } else {
      this.incompleted = true;
      return;
    }
  }
  borrarProducto(index: number) {
    console.log(this.productos[index]);
    Swal.fire({
      title: 'Desea Borrar?',
      text: 'Esta Accion es irreversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cafeteriaService
          .borrarProductos(this.productos[index].id)
          .subscribe((resp) => {
            console.log(resp);
            this.route.navigate(['productos']);
          });
        Swal.fire('Borrado!', 'Producto Borrado con Exito.', 'success');
      }
    });
  }
  modificarElemento(index: number) {
    this.producto = this.productos[index];
  }
}
