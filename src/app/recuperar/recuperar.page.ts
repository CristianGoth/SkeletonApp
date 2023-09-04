import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(public AlertController: AlertController ) { }


  ngOnInit() {
  }
async mostrarAlerta(){
  const alert = await this.AlertController.create({
    header:"Mensaje enviado",
    message: 'se ha enviado a tu correo para restablecer la contraseña.',
    buttons: ['Aceptar']
  });
  await alert.present();
}
}
