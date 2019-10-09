import { Component, OnInit } from '@angular/core';
import { GoodsService } from '@app/esoterics/services/goods.service';
import { Observable } from 'rxjs';
import { Good } from '@app/esoterics/models/goods/Good';

@Component({
  selector: 'sa-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
  providers: [GoodsService]
})
export class GoodsComponent implements OnInit {
  goods$: Observable<Good[]> = null;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goods$ = this.goodsService.getItems();
  }

  shouldMiddle(i: number){
    while (i >= 0) {
      i -= 5;
    }
    i += 5;
    return i == 0 || i == 1;
  }
}