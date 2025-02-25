import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-burger-selector',
  templateUrl: './burger-selector.component.html',
  styleUrls: ['./burger-selector.component.scss'],
  standalone: false
})
export class BurgerSelectorComponent {

  @Input() burgerType: string = '';
  @Output() burgerSelected = new EventEmitter<string>();

  onSelectBurger(event: any) {
    this.burgerType = event.detail.value;
    this.burgerSelected.emit(this.burgerType);
  }

}
