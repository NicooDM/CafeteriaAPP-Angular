import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './cafeteria/home-page/home-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { ProductosPageComponent } from './cafeteria/productos-page/productos-page.component';
import { AgregarPageComponent } from './cafeteria/agregar-page/agregar-page.component';
import { RegistrarseComponent } from './cafeteria/registrarse/registrarse.component';
import { MisComprasComponent } from './cafeteria/mis-compras/mis-compras.component';
import { FavoritosComponent } from './cafeteria/favoritos/favoritos.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'productos',
    component: ProductosPageComponent,
  },

  {
    path: 'agregar',
    component: AgregarPageComponent,
  },
  {
    path: 'editar/:id',
    component: AgregarPageComponent,
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
  },
  {
    path: 'misCompras',
    component: MisComprasComponent,
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
