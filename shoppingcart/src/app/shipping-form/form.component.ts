import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShippingModal } from './shipping.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './form.component.html'
})

export class FormComponent {
    bill: any = localStorage.getItem('totalbill');
    shippingmodel = new ShippingModal('', '', 0);

    constructor(private router: Router) {
    }

    submitForm(form: NgForm): void {
        if (this.shippingmodel.name) {
            alert(`Thanks ${this.shippingmodel.name} for Shopping`);
            localStorage.removeItem('totalbill');
            localStorage.removeItem('cart');
            this.router.navigate(['/']);
        } else {
            alert(`Please enter details`);
        }
    }

    onContinue(): void {
        this.router.navigate(['/']);
    }
}
