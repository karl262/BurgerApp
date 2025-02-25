import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-burger-complements',
  templateUrl: './burger-complements.component.html',
  styleUrls: ['./burger-complements.component.scss'],
  standalone: false
})
export class BurgerComplementsComponent {

  @Input() complements: string[] = [];
}
