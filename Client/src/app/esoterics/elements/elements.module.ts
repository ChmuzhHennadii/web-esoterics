import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { GoodMiddleComponent } from './goods/good-middle/good-middle.component';
import { GoodSmallComponent } from './goods/good-small/good-small.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GoodMiddleComponent, GoodSmallComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    RouterModule
  ],
  exports: [GoodMiddleComponent, GoodSmallComponent]
})
export class ElementsModule { }
