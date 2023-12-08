// miperfil.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service'; // Ajusta la ruta según la ubicación real

@Component({
  selector: 'app-miperfil',
  templateUrl: 'miperfil.page.html',
  styleUrls: ['miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  email: string = '';

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('uid');

    if (uid) {
      this.firebaseService.getUserData(uid).subscribe((data: any) => {
        this.nombre = data?.nombre || 'Nombre no disponible';
        this.apellido = data?.apellido || 'Apellido no disponible';
        this.rut = data?.rut || 'RUT no disponible';
        this.email = data?.email || 'Email no disponible';
      });
    }
  }
}
