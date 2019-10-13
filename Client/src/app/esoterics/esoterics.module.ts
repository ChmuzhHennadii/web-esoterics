import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsotericsRoutingModule } from './esoterics-routing.module';
import { GoodsModule } from './pages/goods/goods.module';
import { UsersModule } from './pages/users/users.module';
import { SignInComponent } from './pages/authorization/sign.in/sign.in.component';
import { SignUpComponent } from './pages/authorization/sign.up/sign.up.component';
import { I18nModule } from '@app/shared/i18n/i18n.module';
import { UiPrimitivesModule } from './ui-primitives/ui-primitives.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    EsotericsRoutingModule,
    
    UiPrimitivesModule,
    I18nModule,
    
    GoodsModule,
    UsersModule,
  ],
})
export class EsotericsModule { }
