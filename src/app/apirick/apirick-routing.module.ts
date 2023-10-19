import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApirickPage } from './apirick.page';

const routes: Routes = [
  {
    path: '',
    component: ApirickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApirickPageRoutingModule {}
