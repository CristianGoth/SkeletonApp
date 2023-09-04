import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page'; 

@NgModule({
  declarations: [
    AppComponent,
    HomePage, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], 
  bootstrap: [AppComponent], 
})
export class AppModule {}
