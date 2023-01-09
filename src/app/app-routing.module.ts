import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProudecListComponent } from './proudec-list/proudec-list.component';
import { ProudectItemDetailsComponent } from './proudect-item-details/proudect-item-details.component';

const routes: Routes = [
  { path: '', component: ProudecListComponent },
{ path: 'proudct/:id', component: ProudectItemDetailsComponent},
{ path: 'Mycard', component: CartItemComponent},
{ path: 'Checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
