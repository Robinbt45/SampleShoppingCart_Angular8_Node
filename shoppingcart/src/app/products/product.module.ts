import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { ProductSearchPipe } from './productSearch.component';
import { OrderByPipe } from './orderBy.pipe';
import { CategoryPipe } from './categoryFilter';
import { AppRoutingModule } from '../app-routing.module';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductSearchPipe,
    OrderByPipe,
    CategoryPipe
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
