import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from "@angular/forms";

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReviewsPage } from '../pages/reviews/reviews';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePageModule } from "../pages/home/home.module";
import { HttpClientModule } from '@angular/common/http';

import { AutoCompleteModule } from 'ionic2-auto-complete';
//import { HTTP } from "@ionic-native/http";
@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    ListPage,
    ReviewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HomePageModule,
    AutoCompleteModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    ListPage,
    ReviewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //HTTP
  ]
})
export class AppModule { }
