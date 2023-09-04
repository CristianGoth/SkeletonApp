import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule si usas [(ngModel)]

import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';

@NgModule({
  declarations: [ResetPasswordPage],
  imports: [
    CommonModule,
    IonicModule, // Agregar IonicModule aquí
    FormsModule, // Agregar FormsModule si usas [(ngModel)]
    ResetPasswordPageRoutingModule
  ]
})
export class ResetPasswordPageModule {}
