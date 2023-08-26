import {Component, OnInit} from '@angular/core';
import {filter, finalize, find, interval, map, Observable, pipe, take} from "rxjs";
import {Data} from "@angular/router";
import {DataService} from "./services/data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-testbed';

    constructor(private dataService: DataService) {

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
        resolve("4. resolved")
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

        this.dataService.fetchCountries()
            .pipe(finalize(() => {
                console.log("finalized");
            }))
            .subscribe({
                    next: countries => {
                        console.log(countries);
                    }, error: e => {
                        console.log("error");
                    }, complete: () => {
                        console.log("completed");
                    }
                }
            )


        this.observerOperatorExample.subscribe(c => {
            console.log(c);
        })
    }


}
