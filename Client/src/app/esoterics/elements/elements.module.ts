import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [PaginationComponent, ModalComponent],
  imports: [
    CommonModule,
    InfrastructureModule
  ],
  exports: [PaginationComponent]
})
export class ElementsModule { }
