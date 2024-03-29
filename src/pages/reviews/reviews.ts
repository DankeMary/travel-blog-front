import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
//import { HomePage } from '../home/home';
import { PostReviewPage } from "../post-review/post-review";

@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  public reviews : Array<any>;
  page: number = 1;
  totalPage: number = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public postService: PostService) {
  }

  ionViewDidLoad() {
    this.postService.getPosts(1).subscribe((reviews: Array<object>) => {
      this.reviews = reviews;
      console.log(this.reviews);
    })
  }

  createNewPost(){
    this.navCtrl.push(PostReviewPage);
  }

  doInfinite(infiniteScroll) {
    //this.page = this.page + 1;
    console.log('Async operation has started');
    setTimeout(() => {
      this.postService.getPosts(this.page)
         .subscribe(
           res => {
             for(let i=0; i< res.length; i++) {
               this.reviews.push(res[i]);
             }
           },
           error =>  console.log(error));
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
