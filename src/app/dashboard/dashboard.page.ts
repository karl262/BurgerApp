import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage {

  burgerType: string = 'Sencilla';
  quantity: number = 1;
  complements: string[] = [];
  paymentMethod: string = 'Tarjeta';
  totalPagar: number = 0;

  calcularTotal(): void {
    const precios: Record<string, number> = {
      Sencilla: 50,
      Doble: 70,
      Triple: 90,
      Especial: 110
    };

    const complementosPrecio: Record<string, number> = {
      papas: 20,
      'aros de cebolla': 15
    };

    let total: number = (precios[this.burgerType] || 50) * this.quantity;

    this.complements.forEach(comp => {
      total += complementosPrecio[comp] || 0;
    });

    this.totalPagar = total;
  }


}
