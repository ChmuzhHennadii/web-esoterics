import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/products/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products' 
  },
  {
    path: 'products',
    component: ProductListComponent
    // loadChildren: './pages/products/products.module#ProductsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsotericsRoutingModule {
}