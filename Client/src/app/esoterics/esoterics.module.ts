import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsotericsRoutingModule } from './esoterics-routing.module';
import { GoodsModule } from './pages/goods/goods.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsotericsRoutingModule,

    GoodsModule
  ],
})
export class EsotericsModule { }
