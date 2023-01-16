import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit{
  comprasGuardadas : string[]|any=[]
  ngOnInit(){
    
   this.comprasGuardadas.push(localStorage.getItem('compras'))
  }

}
