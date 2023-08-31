import {Component, OnInit, signal} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, map, merge, Observable, of, reduce, take} from "rxjs";

@Component({
    selector: 'app-create-entry',
    templateUrl: './create-entry.component.html',
    styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

    name = new FormControl("sajitha")
    updatedValue: string | null = null;


    numbers = [1, 2, 3, 4, 5];
    numbers$ = of(1, 2, 3, 4, 5)
    numbers2$ = of(10, 20, 30, 40, 50)

    map() {
        const f = this.numbers.map(n => n * 2);
        console.log("map");
        console.log(f);

        const f$ = this.numbers$.pipe(map(n => n * 2)).subscribe(
            n => {
                console.log(n)
            })
    }

    filter() {
        const f = this.numbers.filter(n => n % 2 == 0);
        console.log("filter");
        console.log(f);

        const f$ = this.numbers$.pipe(filter(ff => ff % 2 == 0))
            .subscribe(
                n => {
                    console.log(n)
                })

    }


    reduce() {
        const sum = this.numbers
            .reduce((acc, num) => acc + num, 0);

        console.log("sum: " + sum);

        const sum$ = this.numbers$.pipe(
            reduce((a, b) => a + b, 0)
        ).subscribe(c => {
            console.log("sum$:" + c);
        })


    }

    concat() {
        const merged$ = merge(this.numbers$, this.numbers2$).subscribe(
            c => {
                console.log("merged " + c)
            }
        )
    }


    constructor(private fb: FormBuilder) {
        this.map()
        this.filter()
        this.reduce()
        this.concat()
    }

    profile = this.fb.group({
        firstName: ['', [Validators.required, Validators.email, Validators.pattern("")]],
        lastName: [''],
        address: this.fb.group({
            street: [''],
            city: ['']
        }),
        comments: this.fb.array([
            this.fb.control('')
        ])
    })

    /*profile = new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl(""),
        address: new FormGroup({
            street: new FormControl(""),
            city: new FormControl("")
        })
    })*/
    get comments() {
        return this.profile.get('comments') as FormArray;
    };

    ngOnInit() {
        this.name.valueChanges.subscribe(v => {
            this.updatedValue = v;
        })
    }

    updateName() {
        this.name.setValue("sajjjj");
    }

    update() {
        this.profile.patchValue({
            firstName: "Sajj",
            lastName: "Sajj",
            address: {
                street: "90",
                city: "bne"
            }
        })
    }

    onSubmit() {
        console.log(this.profile.value)
    }

    addComment() {
        this.profile.controls.comments.push(this.fb.control(''))
    }


    /* mergedData$ = this.collectionInstanceStore.currentSummary$
         .pipe(
             takeUntilDestroyed(),
             mergeMap(currentSummary => {
                 if (currentSummary === null || currentSummary.id != this.collectionInstanceId) {
                     this.collectionInstanceStore.getCurrentSummary$(this.collectionInstanceId);
                     return this.collectionInstanceStore.currentSummary$.pipe(
                         filter(cs => cs !== null) // Wait for the non-null value
                     );
                 }
                 return of(currentSummary); // If currentSummary is already loaded, continue with it
             }),
             //filter(currentSummary => currentSummary !== null),
             switchMap(currentSummary =>
                 this.companyStateService.currentCompany$
                     .pipe(
                         map(company => ({
                             currentSummary,
                             pnlTags: company.pnLTags
                         })))),
             switchMap(merged =>
                 this.accountingIntegrationService.getAvailableAccountingTenants()
                     .pipe(
                         map(accountingTenants => {
                             if (merged.currentSummary == null) {
                                 return null;
                             }
                             this.linkSourceOptionsAvailable = accountingTenants
                                 .filter(t => t.integrationType === AccountingIntegrationType.OAuth)
                                 .map(t => ({
                                     id: t.id,
                                     label: t.name
                                 }));

                             merged.pnlTags.forEach(pnlTag => {
                                 this.linkSourceOptionsPerEntity.set(pnlTag.id, this.linkSourceOptionsAvailable);
                             });

                             // DefineMapping Route
                             const firstStep = merged.currentSummary.steps[0];
                             const baseRoute = merged.currentSummary.groupBaseRoute;
                             this.mappingRoute = `/portal/profile/business/${baseRoute}/${this.collectionInstanceId}/${firstStep.name.toLowerCase()}`;

                             return {
                                 ...merged,
                                 accountingTenants
                             } as MergedData;
                         })
                     ))
         );*/

}
