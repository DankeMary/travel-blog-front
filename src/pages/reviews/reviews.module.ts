import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewsPage } from './reviews';
//import { PlacesCompleteService } from "../../providers/places-complete-service";
//import { AutoCompleteModule } from 'ionic2-auto-complete';
import { HttpModule } from '@angular/http';
import { PostService } from '../../providers/post-service';
//import { PostReviewPage } from '../post-review/post-review';
//import { PostReviewPage } from '../post-review/post-review';

@NgModule({
  declarations: [
    ReviewsPage,
    //PostReviewPage
  ],
  imports: [
    IonicPageModule.forChild(ReviewsPage),
    //AutoCompleteModule,
    HttpModule
  ],
  providers: [
    PostService,
    //PlacesCompleteService
  ],
  entryComponents: [
    //PostReviewPage
  ]
})
export class ReviewsPageModule {}
