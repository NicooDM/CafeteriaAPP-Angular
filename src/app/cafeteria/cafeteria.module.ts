import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AgregarPageComponent } from './agregar-page/agregar-page.component';
import { ServiciosPageComponent } from './servicios-page/servicios-page.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AgregarPageComponent,
    ServiciosPageComponent,
    ProductosPageComponent,
    FooterComponent,
    
  ],
  exports:[
    FooterComponent,
    AgregarPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CafeteriaModule { }
