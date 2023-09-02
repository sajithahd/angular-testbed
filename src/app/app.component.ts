import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {finalize, interval, map, Observable, take} from "rxjs";
import {DataService} from "./services/data.service";
import {CreateEntryComponent} from "./components/create-entry/create-entry.component";
import {CountryListingComponent} from "./components/country-listing/country-listing.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'angular-testbed';

    @ViewChild(CountryListingComponent) countryList: CountryListingComponent;

    ngAfterViewInit(): void {
        console.log("numbers from child" + this.countryList.testData)
    }

    observable = new Observable<string>(o => {
        setTimeout(() => {
            o.next("5. executed");
            o.complete();
        }, 1000)
        o.next("2. executed again");
        // o.complete();

    });

    promise = new Promise((resolve, reject) => {
        console.log("1. inside promise");
        // resolve("4. resolved")

        reject("promise rejected")
    })

    observerOperatorExample = interval(1000).pipe(
        take(5),
        map(v => {
            return new Date(Date.now()).toISOString()
        })
    )


    ngOnInit() {


        this.promise.then(p => {
            console.log(p);
        }).catch(e => {
            console.log(e)
        })


        this.observable.subscribe({
            next: o => {
                console.log(o);
                console.log("3/6 inside subscription");
            },
            complete: () => {
                console.log("7completed")
            }
        })


        this.observerOperatorExample.subscribe(c => {
            console.log(c);
        })
    }


    selectedCountry(name: string) {
        console.log("" + name)
    }
}
