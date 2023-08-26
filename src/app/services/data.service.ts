import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    url = 'https://restcountries.com/v3.1/all'

    constructor(private http: HttpClient) {
    }

    fetchCountries(): Observable<any> {
        return this.http.get(this.url);
    }
}
