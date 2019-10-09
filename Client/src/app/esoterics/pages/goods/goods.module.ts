import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods/goods.component';
import { GoodComponent } from './good-info/good.component';
import { ElementsModule } from '@app/esoterics/elements/elements.module';
import { UiPrimitivesModule } from '@app/esoterics/ui-primitives/ui-primitives.module';

@NgModule({
  declarations: [GoodsComponent, GoodComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    ElementsModule,
    UiPrimitivesModule
  ]
})
export class GoodsModule { }
