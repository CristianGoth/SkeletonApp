import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';

const routes: Routes = [
  {
    path: '', 
    component: LoginPage, 
  },
  {
    path: 'home', 
    component: HomePage,
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
