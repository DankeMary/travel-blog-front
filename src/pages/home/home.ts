import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { Post } from './post.model';
import { PostPiece } from './post-piece.model';
import { PostService } from "../../providers/post-service";

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

  ionViewDidLoad() {
    this.countryService.getCountries().subscribe((countries: Array<object>) => {
      this.countries = countries;
      console.log(countries);
    })
  }*/
  public postForm: FormGroup;
  postPiecesCount: number;
  post: Post;
  postPieces: Array<PostPiece>;
  newItem: any;

  constructor(private fb: FormBuilder, private postService: PostService) { }
  ngOnInit() {
    this.initForm();
    this.postPiecesCount = 1;
  }

  private initForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      /* text: ['', Validators.maxLength(20)], */
      postPieces: this.fb.array([
        this.initPostPieceFields()
      ])
    });
  }

  public onSubmit() {
    this.convertToModel(this.postForm);
    this.postService.makePost(this.convertToModel(this.postForm)).then( res => console.log(res)).catch(e => console.log(e));
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

    (<FormArray>this.postForm.controls.postPieces).controls.forEach(element => {
      this.postPieces.push(new PostPiece(element.get("text").value,
        element.get("place").value,
        element.get("attachment").value));
    });
    this.post = new Post(this.postForm.controls.title.value, this.postPieces);

    return this.post;
  }
}
