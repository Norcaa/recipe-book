import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
    selector: 'app-carousel-card',
    templateUrl: './carousel-card.component.html',
    styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {

    @Input() recipe?: Recipe

    constructor() { }

    ngOnInit(): void {
    }

}
