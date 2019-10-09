import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@NgModule({
  declarations: [
    PaginationComponent, 
    TextBoxComponent
  ],
  imports: [
    CommonModule,
    InfrastructureModule
  ],
  exports: [
    PaginationComponent, TextBoxComponent
  ]
})
export class UiPrimitivesModule { }