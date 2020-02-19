import { Component, OnChanges,
        OnInit, OnDestroy, Input,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;


    ngOnChanges() {
        this.starWidth = this.rating * 86 / 5.4;
    }

    getColor() {
        return this.rating > 4 ? '#@28a745' : (this.rating > 2.5) ? '#007bff' : 'teal';
    }
}
