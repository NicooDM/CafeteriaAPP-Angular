import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos:string[]|any=[]
  favoritosSeleccionado:[]|any=[]
 constructor(){}
  ngOnInit(){
    this.favoritos.push(JSON.stringify(localStorage.getItem('favoritos')))
    this.favoritosSeleccionado=JSON.parse(localStorage.getItem('favoritos')!)
    
    console.log(this.favoritosSeleccionado)
  }


}
