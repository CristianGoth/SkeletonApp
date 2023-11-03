import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

const firebaseConfig = {
  apiKey: "AIzaSyArw74k66EiHy6RrjvkePfO7R2HwqEObWU",
  authDomain: "tellevoapp-e531c.firebaseapp.com",
  projectId: "tellevoapp-e531c",
  storageBucket: "tellevoapp-e531c.appspot.com",
  messagingSenderId: "435044766433",
  appId: "1:435044766433:web:ef06402f74225437a8dda0",
  measurementId: "G-MHF17DT0HV"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
