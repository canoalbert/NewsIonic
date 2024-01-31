import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';

import { HeaderPage } from './header.page';
import {MenuPageModule} from "../menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageRoutingModule,
    MenuPageModule
  ],
  exports: [
    HeaderPage
  ],
  declarations: [HeaderPage]
})
export class HeaderPageModule {}
