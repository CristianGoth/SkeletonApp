import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConductorPageRoutingModule } from './conductor-routing.module';
import { ConductorPage } from './conductor.page';

// Importa el módulo de Ionic Storage
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorPageRoutingModule,
    IonicStorageModule.forRoot() // Asegúrate de que esta línea esté presente
  ],
  declarations: [ConductorPage]
})
export class ConductorPageModule {}
