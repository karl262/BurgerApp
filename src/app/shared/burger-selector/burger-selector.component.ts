import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-burger-selector',
  templateUrl: './burger-selector.component.html',
  styleUrls: ['./burger-selector.component.scss'],
  standalone: false
})
export class BurgerSelectorComponent {

  @Input() burgerType: string = 'Sencilla';

}
