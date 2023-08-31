import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {finalize} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-country-listing',
    templateUrl: './country-listing.component.html',
    styleUrls: ['./country-listing.component.scss']
})
export class CountryListingComponent implements OnInit {


    @Output() selectedCountry: EventEmitter<string> = new EventEmitter<string>();
    testData = "test"
    countriesb: any;
    countriesr: any = [];


    countries: any = []

    constructor(private countryService: CountryService,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.countryService.getCountries().subscribe(c => {
            this.countriesb = c;
        })

        this.countryService.getCountries2().subscribe(c => {
            this.countriesr.push(c);
        })

        this.dataService.fetchCountries()
            .pipe(finalize(() => {
                console.log("finalized");
            }))
            .subscribe({
                    next: countries => {
                        this.countries = (countries as []).slice(0, 15);
                    }, error: e => {
                        console.log("error");
                    }, complete: () => {
                        console.log("completed");
                    }
                }
            )

    }

    selectCountry(event: string) {
        this.selectedCountry.emit(event)
    }
}
