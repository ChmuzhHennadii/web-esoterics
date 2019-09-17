import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsotericsRoutingModule } from './esoterics-routing.module';
import { ProductsModule } from './pages/products/products.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsotericsRoutingModule,

    ProductsModule
  ],
})
export class EsotericsModule { }
