import { Component, OnInit } from '@angular/core';
import { GoodBaseComponent } from '../good-base.component';

@Component({
  selector: 'sa-good-small',
  templateUrl: './good-small.component.html',
  styleUrls: ['./good-small.component.css']
})
export class GoodSmallComponent extends GoodBaseComponent {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}