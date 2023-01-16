import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './interface/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {
  url : string = 'http://localhost:3000'
 

  constructor(private http: HttpClient) { }
  getProductos():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.url}/productos`)
  }
  agregarProductos(producto : Productos){

   return this.http.post<Productos[]>(`${this.url}/productos`,producto)
  }
  borrarProductos(id:any){
    return this.http.delete(`${this.url}/productos/${id}`)

  }
  editarProductos(producto : Productos){
   return this.http.put(`${this.url}/productos/${producto.id}`,producto)
  }
  getProductoByName(termino:string):Observable<Productos[]>{
  const urlName = `${this.url}/productos/${termino}`
  return this.http.get<Productos[]>(urlName)
  }
  
}
