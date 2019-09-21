import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodComponent } from './good-info/good.component';
import { GoodsComponent } from './goods/goods.component';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent
  },
  {
    path: ":id",
    component: GoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
