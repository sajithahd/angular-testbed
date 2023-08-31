import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CountryListingComponent } from './components/country-listing/country-listing.component';
import { CreateEntryComponent } from './components/create-entry/create-entry.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignalsComponent } from './components/signals/signals.component';

@NgModule({
    declarations: [
        AppComponent,
        CountryListingComponent,
        CreateEntryComponent,
        SignalsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
