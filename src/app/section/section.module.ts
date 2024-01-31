import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionPageRoutingModule } from './section-routing.module';

import { SectionPage } from './section.page';
import {NavbarPageModule} from "../navbar/navbar.module";
import {TabsPageModule} from "../tabs/tabs.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SectionPageRoutingModule,
        NavbarPageModule,
        TabsPageModule,
    ],
  declarations: [SectionPage]
})
export class SectionPageModule {}
