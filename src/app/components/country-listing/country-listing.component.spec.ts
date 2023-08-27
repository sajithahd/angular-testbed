import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListingComponent } from './country-listing.component';
import {MockBuilder, MockRender} from "ng-mocks";

// describe('CountryListingComponent', () => {
//   let component: CountryListingComponent;
//   let fixture: ComponentFixture<CountryListingComponent>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CountryListingComponent]
//     });
//     fixture = TestBed.createComponent(CountryListingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('MyComponent', () => {
    beforeEach(() => MockBuilder(CountryListingComponent));

    it('should create', () => {
        const fixture = MockRender(CountryListingComponent);
        expect(fixture.point.componentInstance).toBeTruthy();
    });
});

