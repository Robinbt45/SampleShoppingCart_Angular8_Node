import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './shipping-form/form.component';

const routes: Routes = [
  {path: 'product', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component: FormComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
