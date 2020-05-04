import {Injectable} from '@angular/core';
import {Todo} from '../../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    new Todo('Bring Milk', true),
    new Todo('Book Tickets for Flight'),
    new Todo('Make Bed'),
  ];

  constructor() {
  }

  addTodo(todo: string): void {
    this.todos.push(new Todo(todo));
  }

  getAll(): Todo[] {
    return this.todos;
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((data, index) => index !== todoId);
    return this.todos;
  }
}
