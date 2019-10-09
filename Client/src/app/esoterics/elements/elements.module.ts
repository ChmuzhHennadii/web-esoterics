import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { GoodMiddleComponent } from './goods/good-middle/good-middle.component';
import { GoodSmallComponent } from './goods/good-small/good-small.component';
import { RouterModule } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [PaginationComponent, ModalComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    RouterModule
  ],
  exports: [GoodMiddleComponent, GoodSmallComponent, CreateNewComponent]
})
export class ElementsModule { }