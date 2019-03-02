import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {
  public API = 'http://localhost:8080';
  public COUNTRY_API = this.API + '/countries';

  constructor(public http: HttpClient) {
  }

  getCountries(): Observable<any> {
    return this.http.get(this.API + '/countries');
  }

  get(id: string) {
    return this.http.get(this.COUNTRY_API + '/' + id);
  }
  
}