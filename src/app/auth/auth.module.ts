import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegistroComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
