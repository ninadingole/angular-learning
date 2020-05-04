import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  test('should create todo with given title', () => {
    service.addTodo('Hello');
    expect(service.getAll().length).toBe(4);
    expect(service.getAll()[3].completed).toBeFalsy();
  });
});
