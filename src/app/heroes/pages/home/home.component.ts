import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px
    }
  `]
})
export class HomeComponent {
  sidebarItems = [
    { label: 'Listado', icon: 'label', url: './listado' },
    { label: 'Agregar', icon: 'add', url: './agregar' },
    { label: 'Buscar', icon: 'search', url: './buscar' }
  ];
}
