import { Component, OnInit, Input } from '@angular/core';
import { GoodsService } from '@app/esoterics/services/goods.service';
import { Good } from '@app/esoterics/models/goods/Good';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sa-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
  private good$: Observable<Good>;

  constructor(
    private goodsService: GoodsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var goodId = +this.route.snapshot.params['id'];
    this.good$ = this.goodsService.getItem(goodId);
  }

}
