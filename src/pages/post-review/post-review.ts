import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Post } from '../../model/post.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PostPiece } from '../../model/post-piece.model';
import { PostService } from '../../providers/post-service';
//import { CompleteTestService } from '../../providers/test-complete-service';
import { PlacesCompleteService } from "../../providers/places-complete-service";

@IonicPage()
@Component({
  selector: 'page-post-review',
  templateUrl: 'post-review.html',
})
export class PostReviewPage implements OnInit {
  public postForm: FormGroup;
  post: Post;
  aPostPieces: Array<PostPiece>;
  attachments: Array<String>; //TODO AttachmentArray
  postPiecesCount: number;
  newItem: any;
  items: any;

  //TODO KeyValue for new places & attachments

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private alertsController: AlertController,
    private postService: PostService,
    private placesCompleteService: PlacesCompleteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostReviewPage');
  }

  ngOnInit() {
    this.initForm();
    this.postPiecesCount = 1;
    console.log("Im on PostReviewPage");
  }

  private initForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      previewTextt: ['', [Validators.required, Validators.maxLength(150)]],
      attachment: [''], //TODO Should it be an object?
      postPieces: this.fb.array([
        this.initPostPieceFields()
      ])
    });
  }

  initPostPieceFields(): FormGroup {
    return this.fb.group({
      postPieceId: [this.postPiecesCount],
      textt: ['', [Validators.required, Validators.maxLength(200)]],
      place: ['', Validators.required], //TODO How to act with the new place? We need to store name & coordinates
      attachment: [''] //TODO AttachmentID = postPieceId
    });
  }

  public onSubmit() {
    this.convertToModel(this.postForm);
    this.postService.makePost(this.convertToModel(this.postForm))
      .then(res => console.log("Imma res: " + res))
      .catch(e => console.log("Imma error: " + e));
  }

  addNewPostPiece(): void {
    const control = <FormArray>this.postForm.controls.postPieces;
    this.postPiecesCount++;
    control.push(this.initPostPieceFields());
  }

  removePostPiece(i: number): void {
    const control = <FormArray>this.postForm.controls.postPieces;
    control.removeAt(i);
    //TODO Also remove the attachment & newPlace
    this.postPiecesCount--;
  }

  get title() {
    return this.postForm.get('title');
  }

  get text() {
    return this.postForm.get('text');
  }

  /*  get postPieces() {
     return this.postForm.get('postPieces');
   }
  */
  public getPostPiecesFormGroup(i: number) {
    var postPieces = this.postForm.get('postPieces') as FormArray;
    const formGroup = postPieces.controls[i] as FormGroup;
    return formGroup;
  }
  get previewTextt() {
    return this.postForm.get("previewTextt");
  }

  get textt() {
    return "";
  }

  //TODO Add other getters

  convertToModel(postForm: FormGroup) {
    this.aPostPieces = new Array<PostPiece>();

    //console.log(this.postForm.controls.country.value);

    (<FormArray>this.postForm.controls.postPieces).controls.forEach(element => {
      this.aPostPieces.push(new PostPiece(
        element.get("postPieceId").value,
        element.get("textt").value,
        element.get("place").value, //TODO: How to act if the place is new? 
        //this.postForm.controls.country.value,
        /* TODO element.get("attachment").value */""));
    });

    this.post = new Post(0,
      postForm.controls.title.value,
      postForm.controls.previewTextt.value,
      new Date(),
      1,
      true,
      false,
      "",
      this.aPostPieces);
    return this.post;
  }
}
