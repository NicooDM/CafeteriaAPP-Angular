import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './interface/productos.interface';
import { Favoritos } from './interface/favoritos.interface';
import { Compras } from './interface/compras.interface';

@Injectable({
  providedIn: 'root',
})
export class CafeteriaService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}/productos`);
  }
  agregarProductos(producto: Productos) {
    return this.http.post<Productos[]>(`${this.url}/productos`, producto);
  }
  borrarProductos(id: any) {
    return this.http.delete(`${this.url}/productos/${id}`);
  }
  editarProductos(producto: Productos) {
    return this.http.put(`${this.url}/productos/${producto.id}`, producto);
  }
  getProductoByName(termino: string): Observable<Productos[]> {
    const urlName = `${this.url}/productos/${termino}`;
    return this.http.get<Productos[]>(urlName);
  }
  agregarFavorito(producto:Favoritos){
   // const urlName=`${this.url}/favoritos`
    return this.http.post(`${this.url}/favoritos`,producto)
  }
  getFavoritos(){
    return this.http.get<Favoritos>(`${this.url}/favoritos`)
  }
  borrarFavoritos(id:any){
    return this.http.delete(`${this.url}/favoritos/${id}`)
  }
  agregarCompra(compra:Compras){
    return this.http.post(`${this.url}/compras`,compra)
  }
  getCompras(){
    return this.http.get<Compras>(`${this.url}/compras`)
  }
}
