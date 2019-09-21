import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods/goods.component';
import { GoodComponent } from './good-info/good.component';
import { ElementsModule } from '@app/esoterics/elements/elements.module';

@NgModule({
  declarations: [GoodsComponent, GoodComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    ElementsModule
  ]
})
export class GoodsModule { }
