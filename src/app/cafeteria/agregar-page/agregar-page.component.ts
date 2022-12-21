import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-page',
  templateUrl: './agregar-page.component.html',
  styleUrls: ['./agregar-page.component.css']
})
export class AgregarPageComponent {
  modificar : boolean = false;

  modificarElemento(){
    console.log('Modificar')
    this.modificar=true

  }

}
