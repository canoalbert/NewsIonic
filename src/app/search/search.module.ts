import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import {NavbarPageModule} from "../navbar/navbar.module";
import {TabsPageModule} from "../tabs/tabs.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchPageRoutingModule,
        NavbarPageModule,
        TabsPageModule
    ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
