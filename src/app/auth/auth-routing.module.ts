import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'registro', component: RegistroComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
