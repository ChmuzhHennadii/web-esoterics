import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsotericsRoutingModule } from './esoterics-routing.module';
import { GoodsModule } from './pages/goods/goods.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsotericsRoutingModule,

    GoodsModule,
    UsersModule
  ],
})
export class EsotericsModule { }
