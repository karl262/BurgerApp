import { Component } from '@angular/core';
import {ModalPedidpComponent} from "../shared/modal-pedido/modal-pedidp.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage {

  burgerType: string = '';
  quantity: number = 1;
  complements: string[] = [];
  paymentMethod: string = '';
  totalPago: number = 0;

  precio: Record<string, number> = {
    Sencilla: 50,
    Doble: 70,
    Triple: 90,
    Especial: 110
  };

  complementosPrecio: Record<string, number> = {
    papas: 20,
    'aros de cebolla': 15
  };

  constructor(private modalController: ModalController) {}

  actualizarValores(tipo: string, cantidad: number, complementos: string[], pago: string): void {
    this.burgerType = tipo;
    this.quantity = cantidad;
    this.complements = complementos;
    this.paymentMethod = pago;
    this.calcularTotal();
  }

  calcularTotal(): void {
    if (!this.burgerType || this.quantity <= 0) {
      this.totalPago = 0;
      return;
    }

    let total: number = (this.precio[this.burgerType] || 0) * this.quantity;

    this.complements.forEach(comp => {
      total += this.complementosPrecio[comp] || 0;
    });

    this.totalPago = total;
  }

  cancelar(): void {
    this.burgerType = '';
    this.quantity = 1;
    this.complements = [];
    this.paymentMethod = '';
    this.totalPago = 0;
  }

  async mostrarPedido() {
    const modal = await this.modalController.create({
      component: ModalPedidpComponent,
      componentProps: {
        burgerType: this.burgerType,
        quantity: this.quantity,
        complements: this.complements,
        paymentMethod: this.paymentMethod,
        totalPagar: this.totalPago,
      }
    });
    return await modal.present();
  }

}
