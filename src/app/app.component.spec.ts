import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MockBuilder, MockedComponentFixture, MockRender} from "ng-mocks";
import {AppModule} from "./app.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: MockedComponentFixture<AppComponent>;

    beforeEach(() => {
        return MockBuilder([AppComponent], AppModule)
            .replace(HttpClientModule, HttpClientTestingModule)
    })

    beforeEach(() => {
        fixture = MockRender(AppComponent);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
    })

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'angular-testbed'`, () => {

        expect(component.title).toEqual('angular-testbed');
    });

    // it('should render title', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.nativeElement as HTMLElement;
    //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testbed app is running!');
    // });
});
