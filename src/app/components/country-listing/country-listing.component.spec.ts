import {CountryListingComponent} from './country-listing.component';
import {MockBuilder, MockedComponentFixture, MockRender} from "ng-mocks";
import {CountryService} from "../../services/country.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../../services/data.service";
import {BehaviorSubject, ReplaySubject} from "rxjs";

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

    let component: CountryListingComponent;
    let fixture: MockedComponentFixture<CountryListingComponent>;

    beforeEach(() => {

            return MockBuilder([CountryListingComponent])
                .replace(HttpClientModule, HttpClientTestingModule)
                .provide(DataService)
                // .keep(CountryService)
                .mock(CountryService, {

                    getCountries: () => new BehaviorSubject<any>({
                        name: 'United State',
                        currency: 'USD'
                    }),
                    getCountries2: () => {
                        const rs = new ReplaySubject<any>(2);
                        rs.next({
                            name: 'Sri Lanka',
                            currency: 'LKR'
                        });

                        rs.next({
                            name: 'Sri Lanka',
                            currency: 'LKR'
                        });
                        return rs;
                    }
                });
        }
    )

    beforeEach(() => {
        fixture = MockRender(CountryListingComponent);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return country list', () => {
        const expectedCountry = {
            name: 'United State',
            currency: 'USD'
        };

        const expectedCountry2 = [{
            name: 'Sri Lanka',
            currency: 'LKR'
        }, {
            name: 'Sri Lanka',
            currency: 'LKR'
        }];


        expect(component.countriesb).toEqual(expectedCountry)
        expect(component.countriesr).toEqual(expectedCountry2)


    });
});

