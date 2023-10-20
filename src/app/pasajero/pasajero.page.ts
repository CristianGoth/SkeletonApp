import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage {
  viajes: any[] = [];
  fecha: string = '';
  hora: string = '';
  ubicacion: string = '';

  constructor(private storage: Storage) {
    this.initDatabase();
  }

  async initDatabase() {
    await this.storage.create();
    this.loadData();
  }

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData() {
    this.viajes = await this.storage.get('viajes') || [];
  }

  async guardarViaje() {
    // Aquí puedes implementar la lógica para guardar el viaje en la base de datos
    const nuevoViaje = {
      fecha: this.fecha,
      hora: this.hora,
      ubicacion: this.ubicacion,
    };
    this.viajes.push(nuevoViaje);
    await this.storage.set('viajes', this.viajes);

    // Limpia los campos después de guardar
    this.fecha = '';
    this.hora = '';
    this.ubicacion = '';
  }
}
