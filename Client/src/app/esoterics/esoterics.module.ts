import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsotericsRoutingModule } from './esoterics-routing.module';
import { GoodsModule } from './pages/goods/goods.module';
import { UsersModule } from './pages/users/users.module';
import { SignInComponent } from './pages/authorization/sign.in/sign.in.component';
import { SignUpComponent } from './pages/authorization/sign.up/sign.up.component';
import { I18nModule } from '@app/shared/i18n/i18n.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    EsotericsRoutingModule,

    GoodsModule,
    UsersModule,
    
    I18nModule
  ],
})
export class EsotericsModule { }
