import { Component, Input } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedidp.component.html',
  styleUrls: ['./modal-pedidp.component.scss'],
  standalone: false
})
export class ModalPedidpComponent {
  @Input() burgerType!: string;
  @Input() quantity!: number;
  @Input() complements!: string[];
  @Input() paymentMethod!: string;
  @Input() totalPagar!: number;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

}
