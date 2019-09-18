import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "goods" },

  {
    path: 'goods',
    loadChildren: "./pages/goods/goods.module#GoodsModule"
  },

  {
    path: 'users',
    loadChildren: "./pages/users/users.module#UsersModule"
  },

  {
    path: "orders",
    loadChildren: "./pages/orders/ordres.module#OrdersModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsotericsRoutingModule {
}