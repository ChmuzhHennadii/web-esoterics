import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users/users.component';

const routes: Routes = [
  { path: "", redirectTo: "goods", pathMatch: "full"},

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
  },

  {
    path: "**",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsotericsRoutingModule {
}