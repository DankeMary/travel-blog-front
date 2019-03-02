import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from "../pages/home/post.model";

@Injectable()
export class PostService {
  public API = 'http://localhost:8080';
  public POST_API = this.API + '/makePost';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
  }

  public makePost(post: Post){
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