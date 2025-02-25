import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BurgerSelectorComponent} from "./burger-selector/burger-selector.component";
import {BurgerNumberComponent} from "./burger-number/burger-number.component";
import {PaymentMethodComponent} from "./payment-method/payment-method.component";
import {BurgerComplementsComponent} from "./burger-complements/burger-complements.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BurgerSelectorComponent,
    BurgerNumberComponent,
    BurgerComplementsComponent,
    PaymentMethodComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    BurgerSelectorComponent,
    BurgerNumberComponent,
    PaymentMethodComponent,
    BurgerComplementsComponent
  ]
})
export class SharedModule { }
