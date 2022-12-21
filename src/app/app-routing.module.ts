import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './cafeteria/home-page/home-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { ProductosPageComponent } from './cafeteria/productos-page/productos-page.component';
import { ServiciosPageComponent } from './cafeteria/servicios-page/servicios-page.component';
import { AgregarPageComponent } from './cafeteria/agregar-page/agregar-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'productos',
    component:ProductosPageComponent
  },
  {
    path:'servicios',
    component:ServiciosPageComponent
  },
  
  {
    path:'agregar',
    component:AgregarPageComponent
  },

  {
    path:'**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
