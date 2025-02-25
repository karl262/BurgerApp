import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
  standalone: false
})
export class PaymentMethodComponent {

  @Input() paymentMethod: string = 'Tarjeta';

}
