import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
  standalone: false
})
export class PaymentMethodComponent {

  @Input() paymentMethod: string = '';
  @Output() paymentSelected = new EventEmitter<string>();

  onSelectPayment(event: any) {
    this.paymentMethod = event.detail.value;
    this.paymentSelected.emit(this.paymentMethod);
  }

}
