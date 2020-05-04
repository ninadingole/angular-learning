import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TvRatingFormComponent} from './tv-rating-form.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TvRatingFormComponent', () => {
  let component: TvRatingFormComponent;
  let fixture: ComponentFixture<TvRatingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, NgbRatingModule],
      declarations: [ TvRatingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvRatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
