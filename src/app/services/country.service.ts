import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    countriesb: BehaviorSubject<any>;
    countriesr: ReplaySubject<any>;

    constructor() {
        this.countriesr = new ReplaySubject<any>(2);
        this.countriesr.next({
            name: 'Sri Lanka',
            currency: 'LKR'
        });

        this.countriesr.next({
            name: 'Sri Lanka',
            currency: 'LKR'
        });
        this.countriesr.next({
            name: 'Sri Lanka',
            currency: 'LKR'
        });

        this.countriesb = new BehaviorSubject<any>(null);
        this.countriesb.next({
            name: 'United State',
            currency: 'USD'
        })
    }

    getCountries() {
        return this.countriesb;
    }

    getCountries2() {
        return this.countriesr;
    }
}
