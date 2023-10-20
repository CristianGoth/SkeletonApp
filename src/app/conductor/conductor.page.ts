import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage {
  fecha: string = ' ';
  hora: string = ' ';
  ubicacion: string = ' ';
  cupos: string = ' ';
  precio: string = ' ';

  constructor(private storage: Storage) {
    this.createDatabase(); // Llama a createDatabase al constructor
  }

  async createDatabase() {
    await this.storage.create();
  }

  guardarViaje() {
    const viaje = { fecha: this.fecha, hora: this.hora, ubicacion: this.ubicacion, cupos: this.cupos, precio: this.precio };
    this.storage.get('viajes').then((viajes: any[]) => {
      if (viajes) {
        viajes.push(viaje);
        this.storage.set('viajes', viajes);
      } else {
        this.storage.set('viajes', [viaje]);
      }
    });
  }
}
  
