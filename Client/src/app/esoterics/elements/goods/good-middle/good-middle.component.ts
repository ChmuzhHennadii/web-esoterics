import { Component } from '@angular/core';
import { GoodBaseComponent } from '../good-base.component';

@Component({
  selector: 'sa-good-middle',
  templateUrl: './good-middle.component.html',
  styleUrls: ['./good-middle.component.css']
})
export class GoodMiddleComponent extends GoodBaseComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}