import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    InfrastructureModule
  ],
  exports: [PaginationComponent]
})
export class ElementsModule { }
