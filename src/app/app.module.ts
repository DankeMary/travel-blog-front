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

import { PostReviewPageModule } from "../pages/post-review/post-review.module";
import { HomePageModule } from "../pages/home/home.module";

import { HttpClientModule } from '@angular/common/http';

import { AutoCompleteModule } from 'ionic2-auto-complete';
//import { PostReviewPage } from '../pages/post-review/post-review';
//import { HTTP } from "@ionic-native/http";
@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    ListPage,
    ReviewsPage,
    //PostReviewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    AutoCompleteModule,  
    HomePageModule,
    PostReviewPageModule,      
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    ListPage,
    ReviewsPage,
    //PostReviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //HTTP
  ]
})
export class AppModule { }
