import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoInputComponent} from './todo/todo-input/todo-input.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TodoComponent,
        TodoInputComponent,
        TodoItemComponent
      ],
    });
  }));

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'angular-learning'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-learning');
  });

  test('should render title', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('.content span').textContent).toContain('angular-learning app is running!');
  });
});
