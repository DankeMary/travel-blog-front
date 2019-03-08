import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { Post } from './post.model';
import { PostPiece } from './post-piece.model';
import { Place } from "./place.model";
import { PostService } from "../../providers/post-service";
import { CompleteTestService } from "../../providers/test-complete-service";
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  /*public countries: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public countryService: CountryService) {
  }
  */
  public postForm: FormGroup;
  postPiecesCount: number;
  post: Post;
  postPieces: Array<PostPiece>;
  newItem: any;
  items: any;

  constructor(private navCtrl: NavController,
    private fb: FormBuilder,
    private alertsController: AlertController,
    private postService: PostService,
    public completeTestService: CompleteTestService) { }
  ngOnInit() {
    this.initForm();
    this.postPiecesCount = 1;
  }

  ionViewWillLeave() {
    /* const confirm = this.alertsController.create({
      title: 'Use this lightsaber?',
      message: 'Are you sure you want to leave?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    await confirm.present(); */
    //this.showConfirm();
  }

  showConfirm(): Promise<boolean> {
    return new Promise((resolve, reject) =>{
      const confirm = this.alertsController.create({
        title : 'Are you sure ?',
        buttons: [
          {
            text: 'Yes',
            handler:_=> resolve(true)
          },
          {
            text: 'No',
            handler:_=> resolve(false)
          }
        ]
      }).present();
    })
  }


  private initForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      /* text: ['', Validators.maxLength(20)], */
      country: [''],
      postPieces: this.fb.array([
        this.initPostPieceFields()
      ])
    });
  }

  public onSubmit() {
    this.convertToModel(this.postForm);
    this.postService.makePost(this.convertToModel(this.postForm))
      .then(res => console.log("Imma res: " + res))
      .catch(e => console.log("Imma error: " + e));
  }

  initPostPieceFields(): FormGroup {
    return this.fb.group({
      text: ['', [Validators.required, Validators.maxLength(20)]],
      place: [''],
      attachment: [''],
    });
  }

  addNewPostPiece(): void {
    const control = <FormArray>this.postForm.controls.postPieces;
    this.postPiecesCount++;
    control.push(this.initPostPieceFields());
  }

  removePostPiece(i: number): void {
    const control = <FormArray>this.postForm.controls.postPieces;
    control.removeAt(i);
  }

  get title() {
    return this.postForm.get('title');
  }

  get text() {
    return this.postForm.get('text');
  }

  convertToModel(postForm: FormGroup) {
    this.postPieces = new Array<PostPiece>();

    console.log(this.postForm.controls.country.value);

    (<FormArray>this.postForm.controls.postPieces).controls.forEach(element => {
      this.postPieces.push(new PostPiece(element.get("text").value,
        //element.get("place").value,
        this.postForm.controls.country.value,
        element.get("attachment").value));
    });
    //this.post = null; //TODO new Post(this.postForm.controls.title.value, this.postPieces);

    return this.post;
  }
}
