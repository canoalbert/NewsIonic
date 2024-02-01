import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fab2PageRoutingModule } from './fab2-routing.module';

import { Fab2Page } from './fab2.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Fab2PageRoutingModule
    ],
    exports: [
        Fab2Page
    ],
    declarations: [Fab2Page]
})
export class Fab2PageModule {}
