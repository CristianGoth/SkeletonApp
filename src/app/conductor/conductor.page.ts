import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

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
  precio: string = '';
  destino: string = '';

  constructor(private storage: Storage, private alertController: AlertController) {
    this.createDatabase();
    this.setFechaActual();
  }

  async createDatabase() {
    await this.storage.create();
  }

  async setFechaActual() {
    // Obtener la fecha actual en formato 'YYYY-MM-DD'
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    
    this.fecha = `${year}-${month}-${day}`;
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardarViaje() {
    const numCupos = parseInt(this.cupos, 10);

    // Verificar si el número de cupos es mayor a 4
    if (numCupos > 4) {
      this.showAlert('No puedes llevar a más de 4 personas');
      return;
    }

    const viaje = { destino: this.destino, fecha: this.fecha, hora: this.hora, ubicacion: this.ubicacion, cupos: this.cupos, precio: this.precio };

    this.storage.get('viajes').then((viajes: any[]) => {
      if (viajes) {
        viajes.push(viaje);
        this.storage.set('viajes', viajes);
      } else {
        this.storage.set('viajes', [viaje]);
      }

      // Limpiar campos
      this.hora = '';
      this.ubicacion = '';
      this.cupos = '';
      this.precio = '';
      this.destino = '';

      // Mostrar alerta de éxito
      this.showAlert('Viaje creado exitosamente');
    });
  }
}
