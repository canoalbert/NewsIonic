import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fab2Page } from './fab2.page';

const routes: Routes = [
  {
    path: '',
    component: Fab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fab2PageRoutingModule {}
