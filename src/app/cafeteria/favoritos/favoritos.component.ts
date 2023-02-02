import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../cafeteria.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  favoritos: [] | any = [];
  favoritosPorID: []|any =[];
  mostrarAlert:boolean=false;
  constructor(private cafeteriaService: CafeteriaService) {}
  ngOnInit() {
    this.mostrarAlert=false;
    this.cafeteriaService.getFavoritos().subscribe((resp)=>{
   
    
      this.favoritos=resp;
     console.log(this.favoritos[0].user)
     this.favoritos.forEach((element:any) => {
      console.log('element',element)
      if(localStorage.getItem('id')===element.user){
        this.favoritosPorID.push(element)
        console.log('favoritos por id',this.favoritosPorID)

      }
      else{
        console.log('sin fav')
      }
      
      
     });
    
   
    })
  }
  borrarFav(index:number){
    
    this.cafeteriaService.borrarFavoritos(this.favoritosPorID[index].id).subscribe((resp)=>{
      console.log(resp);
      this.mostrarAlert=true;
    })

  }
}
