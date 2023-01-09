import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemDetailsComponent } from './cart-item-details/cart-item-details.component';
import { ProudectItemDetailsComponent } from './proudect-item-details/proudect-item-details.component';
import { ProudectItemComponent } from './proudect-item/proudect-item.component';
import { ProudecListComponent } from './proudec-list/proudec-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    CartItemDetailsComponent,
    ProudectItemDetailsComponent,
    ProudectItemComponent,
    ProudecListComponent,
    CheckoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ { provide:CartService ,useValue: '',multi: true},ProductsService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
