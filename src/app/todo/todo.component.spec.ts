import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockComponent} from '../../jestGlobalMocks';
import {TodoComponent} from './todo.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoInputComponent} from './todo-input/todo-input.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        TodoItemComponent,
        TodoInputComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
