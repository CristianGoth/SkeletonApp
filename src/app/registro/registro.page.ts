import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  email: string = '';
  password: string = '';
  verificacion: string = '';

  constructor(/*private afAuth: FirebaseApp*/) {}

  async registrar() {
    try {
      if (this.password === this.verificacion) {
        const auth = getAuth();
        const resultado = await /*this.afAuth.*/ createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log('Usuario registrado:', resultado);
        // You can redirect the user to another page after registration.
      } else {
        console.log('Las contraseñas no coinciden');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  }
}
