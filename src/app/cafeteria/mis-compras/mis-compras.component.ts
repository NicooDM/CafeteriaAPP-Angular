import { Component, OnInit } from '@angular/core';
import { Compras } from '../interface/compras.interface';
import { CafeteriaService } from '../cafeteria.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css'],
})
export class MisComprasComponent implements OnInit {
  comprasGuardadas: Compras[] | any = [];
  comprasPorID:[]|any=[]
  constructor(private cafeteriaService:CafeteriaService){}
  ngOnInit() {
  this.cafeteriaService.getCompras().subscribe((resp)=>{console.log(resp)
  
  this.comprasGuardadas= resp
  
  console.log(this.comprasGuardadas.producto)
 
  this.comprasGuardadas.forEach((element:any) => {
    if(localStorage.getItem('id')===element.user){
    
    
      this.comprasPorID.push(element.producto)

    }
    
    
    
 
  }) });
 

    
  }
}
