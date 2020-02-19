import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    cartProducts: any;

    ngOnInit() {
        const data = localStorage.getItem('cart');
        if (data !== null) {
          this.cartProducts = JSON.parse(data);
        } else {
          this.cartProducts = [];
        }
    }
}
