import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApirickPageRoutingModule } from './apirick-routing.module';

import { ApirickPage } from './apirick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApirickPageRoutingModule
  ],
  declarations: [ApirickPage]
})
export class ApirickPageModule {}
