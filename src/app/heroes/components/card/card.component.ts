import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input()
  public heroe!: Heroe;

}
