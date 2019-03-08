import { AutoCompleteService } from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class PlacesCompleteService implements AutoCompleteService {
    labelAttribute = "placeName";
    formValueAttribute = "placeId"; // Empty string for passing the whole object
    public API = 'http://localhost:8080';
    public PLACE_API = this.API + '/places';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {

    }

    getResults(keyword: string) {
        var params = new URLSearchParams();
        params.append("place", keyword.toString());  
        console.log("PARAMS: " + params);  
        return this.http.get(this.PLACE_API + "/findPlace?" + params)
            .map(
                result => {
                    console.log(result.json());
                    return result.json();
                });
    }
}
