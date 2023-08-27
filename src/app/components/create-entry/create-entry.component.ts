import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, take} from "rxjs";

@Component({
    selector: 'app-create-entry',
    templateUrl: './create-entry.component.html',
    styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

    name = new FormControl("sajitha")
    updatedValue: string | null = null;


    constructor(private fb: FormBuilder) {
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
    get comments(){
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
}
