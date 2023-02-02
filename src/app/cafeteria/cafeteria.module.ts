import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AgregarPageComponent } from './agregar-page/agregar-page.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    HomePageComponent,
    AgregarPageComponent,
    ProductosPageComponent,
    FooterComponent,
    RegistrarseComponent,
    MisComprasComponent,
    FavoritosComponent,
    FilterPipe
  ],
  exports: [FooterComponent, AgregarPageComponent],
  imports: [CommonModule, FormsModule],
})
export class CafeteriaModule {}
