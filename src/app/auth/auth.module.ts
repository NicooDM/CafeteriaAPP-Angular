import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CafeteriaModule } from '../cafeteria/cafeteria.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CafeteriaModule,
    ReactiveFormsModule
  
  ]
})
export class AuthModule { }
