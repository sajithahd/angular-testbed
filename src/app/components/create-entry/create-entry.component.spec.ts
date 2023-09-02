import {CreateEntryComponent} from './create-entry.component';
import {FormBuilder} from "@angular/forms";
import {MockBuilder, MockedComponentFixture, MockRender} from "ng-mocks";
import {AppModule} from "../../app.module";
//
// describe('CreateEntryComponent', () => {
//   let component: CreateEntryComponent;
//   let fixture: ComponentFixture<CreateEntryComponent>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CreateEntryComponent],
//       imports: [ReactiveFormsModule]
//     });
//     fixture = TestBed.createComponent(CreateEntryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('CreateEntryComponent', () => {
    let component: CreateEntryComponent;
    let fixture: MockedComponentFixture<CreateEntryComponent, any>;

    beforeEach(() => {
        return MockBuilder([CreateEntryComponent], AppModule)
            .provide(FormBuilder)
    });

    beforeEach(() => {
        fixture = MockRender(CreateEntryComponent);
        component = fixture.point.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
