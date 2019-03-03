import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HTTP } from "@ionic-native/http";
import { Post } from "../pages/home/post.model";
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()
export class PostService {
  public API = 'http://localhost:8080';
  public POST_API = this.API + '/posts';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient /* HTTP */) {
  }

  public getPosts (page: number): Observable<any> {
    var params = new URLSearchParams();
    params.append("page", page.toString());  
    console.log("PARAMS: " + params);  
    return this.http.get(this.POST_API + "/all?" + params); 
  }

  public makePost(post: Post){
      console.log("Imma title: " + post.title);
      console.log(post);
    return this.http.post<any>(this.POST_API, post, {headers: this.headers}).toPromise();
  }

  /* getCountries(): Observable<any> {
    return this.http.get(this.API + '/countries');
  }

  get(id: string) {
    return this.http.get(this.COUNTRY_API + '/' + id);
  } */
  
}