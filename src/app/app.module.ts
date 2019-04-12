import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SwPlayerService } from './services/sw-player.service';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent,TeamPageComponent,HomePage],
  entryComponents: [],
  imports: [
     CommonModule,
     HttpClientModule,
     BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule
    ],
  providers: [
    SwPlayerService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
