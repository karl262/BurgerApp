import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-burger-complements',
  templateUrl: './burger-complements.component.html',
  styleUrls: ['./burger-complements.component.scss'],
  standalone: false
})
export class BurgerComplementsComponent {

  @Input() complements: string[] = [];
  @Output() complementsSelected = new EventEmitter<string[]>();

  onToggleComplement(complement: string, checked: boolean) {
    if (checked) {
      this.complements.push(complement);
    } else {
      this.complements = this.complements.filter(item => item !== complement);
    }
    this.complementsSelected.emit(this.complements);
  }
}
