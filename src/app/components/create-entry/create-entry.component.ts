import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, take} from "rxjs";

@Component({
    selector: 'app-create-entry',
    templateUrl: './create-entry.component.html',
    styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

    name = new FormControl("sajitha")
    updatedValue: string | null = null;


    profile = new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl(""),
        address: new FormGroup({
            street: new FormControl(""),
            city: new FormControl("")
        })
    })

    ngOnInit() {
        this.name.valueChanges.subscribe(v => {
            this.updatedValue = v;
        })
    }

    updateName() {
        this.name.setValue("sajjjj");
    }
}
