import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostReviewPage } from './post-review';
import { PlacesCompleteService } from "../../providers/places-complete-service";
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { PostService } from '../../providers/post-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    PostReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PostReviewPage),
    AutoCompleteModule, 
    HttpModule
  ],
  providers: [
    PostService,
    PlacesCompleteService
  ],
  exports: [
    PostReviewPage
  ],
  entryComponents: [
    PostReviewPage
  ]
})
export class PostReviewPageModule {}
