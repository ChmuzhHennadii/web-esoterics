import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { ModalComponent } from './modal/modal.component';
import { I18nModule } from '../../shared/i18n/i18n.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    PaginationComponent, 
    TextBoxComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    InfrastructureModule,
    I18nModule,
    ModalModule.forRoot(),
  ],
  exports: [
    PaginationComponent, 
    TextBoxComponent, 
    ModalComponent
  ]
})
export class UiPrimitivesModule { }