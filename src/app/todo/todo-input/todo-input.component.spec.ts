import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoInputComponent} from './todo-input.component';
import {By} from '@angular/platform-browser';
import {TodoService} from '../shared/todo.service';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;
  const todoServiceMock = {
    addTodo: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputComponent ],
      providers: [{provide: TodoService, useValue: todoServiceMock}]
    });
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should call todo service to add todo item', () => {
    jest.spyOn(todoServiceMock, 'addTodo');

    fixture.debugElement.query(By.css('input')).nativeElement.value = 'Hello';
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);

    expect(fixture.componentInstance.addTodo).toHaveBeenCalledWith('Hello');
    expect(todoServiceMock.addTodo).toHaveBeenCalledWith('Hello');
  });
});
