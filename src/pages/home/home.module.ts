import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CountryService } from "../../providers/country-service";
import { PostService } from '../../providers/post-service';
import { CompleteTestService } from "../../providers/test-complete-service";
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    AutoCompleteModule, HttpModule
  ],
  providers: [
    CountryService,
    PostService,
    CompleteTestService
  ]
})
export class HomePageModule {}
