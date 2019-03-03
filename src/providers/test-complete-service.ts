import { AutoCompleteService } from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class CompleteTestService implements AutoCompleteService {
    labelAttribute = "namee";
    formValueAttribute = "countryId"; // Empty string for passing the whole object
    public API = 'http://localhost:8080';
    public POST_API = this.API + '/makePost';
    public COUNTRY_API = this.API + '/countries';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {

    }

    getResults(keyword: string) {
        return this.http.get(this.COUNTRY_API)
            .map(
                result => {
                    console.log(result.json()
                        .filter(item => item.namee.toLowerCase().startsWith(keyword.toLowerCase())));
                    return result.json()
                        .filter(item => item.namee.toLowerCase().startsWith(keyword.toLowerCase()));
                });
    }
}
