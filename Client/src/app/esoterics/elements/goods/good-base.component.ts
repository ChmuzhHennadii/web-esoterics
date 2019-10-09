import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Good } from '@app/esoterics/models/goods/Good';

@Component({
    selector: 'sa-good-base',
    template: '',
})
export class GoodBaseComponent implements OnInit {
    @Input() good: Good;
    @Output() addingToCart = new EventEmitter<Good>();

    constructor() { }

    ngOnInit() {
    }
}