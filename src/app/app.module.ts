import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusPage } from '../pages/status/status';
import { HelpPage } from '../pages/help/help';
import { DataProvider } from '../providers/data/data';
//import { FlashCardComponent } from '../components/flash-card/flash-card';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpPage,
    StatusPage
    //FlashCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelpPage,
    StatusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
