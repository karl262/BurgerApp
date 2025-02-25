import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-burger-number',
  templateUrl: './burger-number.component.html',
  styleUrls: ['./burger-number.component.scss'],
  standalone: false
})
export class BurgerNumberComponent {

  @Input() quantity: number = 0;
  @Output() quantityChanged = new EventEmitter<number>();

  onQuantityChange(event: any) {
    this.quantity = event.detail.value;
    this.quantityChanged.emit(this.quantity);
  }

}
