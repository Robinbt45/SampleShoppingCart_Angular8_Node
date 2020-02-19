import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FilterModal } from './filertModel';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any[];
  cartProducts: any;
  sortModel = new FilterModal('price', '');
  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.productService.getProducts()
        .subscribe((item) => this.products = item);

  }

  addToCart(index) {
    const product = this.products[index];
    let cartData = [];
    const data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    console.log('>>>>>', product);
    cartData.push(product);
    console.log('>>>>>cartData', cartData);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
    console.log('updated>>>>>', this.cartProducts );
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
