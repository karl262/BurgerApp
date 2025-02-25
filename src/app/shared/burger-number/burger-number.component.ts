import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-burger-number',
  templateUrl: './burger-number.component.html',
  styleUrls: ['./burger-number.component.scss'],
  standalone: false
})
export class BurgerNumberComponent {

  @Input() quantity: number = 1;

}
