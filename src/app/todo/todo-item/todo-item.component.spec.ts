import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import {Todo} from '../../model/todo';
import {By} from '@angular/platform-browser';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    });
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
  });

  test('should mark checkbox checked and css of completed for completed item', () => {
    fixture.componentInstance.todo = new Todo('bring milk', true);
    fixture.componentInstance.index = 1;
    fixture.detectChanges();

    expect(fixture.componentInstance.index).toEqual(1);
    expect(fixture.debugElement.query(By.css('input')).nativeElement.checked).toBeTruthy();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.classList).toContain('completed');
  });

  test('should create todo item with checkbox unchecked and no completed css', () => {
    fixture.componentInstance.todo = new Todo('bring milk');
    fixture.componentInstance.index = 1;
    fixture.detectChanges();

    expect(fixture.componentInstance.index).toEqual(1);
    expect(fixture.debugElement.query(By.css('input')).nativeElement.checked).toBeFalsy();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.classList).not.toContain('completed');
  });
});
