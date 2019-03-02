import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CountryService } from "../../providers/country-service";
import { PostService } from '../../providers/post-service';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers: [
    CountryService,
    PostService
  ]
})
export class HomePageModule {}
