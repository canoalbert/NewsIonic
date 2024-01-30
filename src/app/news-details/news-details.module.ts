import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailsPageRoutingModule } from './news-details-routing.module';

import { NewsDetailsPage } from './news-details.page';
import {NavbarPageModule} from "../navbar/navbar.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageRoutingModule,
    NavbarPageModule,
    NgForOf
  ],
  declarations: [NewsDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsDetailsPageModule {}
