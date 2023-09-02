import {DataService} from './data.service';
import {HttpClientModule} from "@angular/common/http";
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import {AppModule} from "../app.module";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    return MockBuilder(DataService, AppModule)
        .replace(HttpClientModule, HttpClientTestingModule)
  })

  it('should be created', () => {
    MockRender();
    service = ngMocks.findInstance(DataService)
    expect(service).toBeTruthy();
  });

  it('should be return valid', () => {
    MockRender();
    service = ngMocks.findInstance(DataService)
    const httpMock = ngMocks.findInstance(HttpTestingController);

    let actual: any;
    service.fetchCountries().subscribe(value => (actual = value));


    //simulate the request
    const req = httpMock.expectOne('https://restcountries.com/v3.1/all')
    expect(req.request.method).toEqual('GET');
    req.flush([{
      name: 'Sri Lanka',
      currency: 'LKR'
    }])
    httpMock.verify();

    expect(actual).toEqual([{
      name: 'Sri Lanka',
      currency: 'LKR'
    }]);
  });
});
