import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '', //path
    component: HomePage, // Componente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Al route module le asignamos como hijo las rutas de indicamos arriba
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
