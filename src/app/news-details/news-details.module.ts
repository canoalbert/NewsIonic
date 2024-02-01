import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailsPageRoutingModule } from './news-details-routing.module';

import { NewsDetailsPage } from './news-details.page';
import {NavbarPageModule} from "../navbar/navbar.module";
import {TabsPageModule} from "../tabs/tabs.module";
import {Fab2PageModule} from "../fab2/fab2.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageRoutingModule,
    NavbarPageModule,
    NgForOf,
    TabsPageModule,
    Fab2PageModule
  ],
  declarations: [NewsDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsDetailsPageModule {}
