import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarPageRoutingModule } from './navbar-routing.module';
import { NavbarPage } from './navbar.page';
import {MenuPageModule} from "../menu/menu.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarPageRoutingModule,
    MenuPageModule


  ],
  exports: [
    NavbarPage
  ],
  declarations: [NavbarPage]
})
export class NavbarPageModule {}
