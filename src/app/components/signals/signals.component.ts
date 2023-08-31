import {Component, computed, OnInit, Signal, signal} from '@angular/core';
import {count} from "rxjs";

@Component({
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {

    count = signal(0);
    updatedCount: Signal<number> = signal(0);

    comments = signal([{index: 1, content: "test"}])

    ngOnInit() {
        this.count.set(4);

        console.log("signals =========");
        console.log(this.count());

        this.count.update(c => c + 3);

        this.comments.mutate(c => {
            c[0].index = 4;
        })


        this.updatedCount = computed(() => this.count() * 2)
    }
}
