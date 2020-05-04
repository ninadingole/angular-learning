import {Component, OnInit} from '@angular/core';
import {TodoService} from './shared/todo.service';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoservice.getAll();
  }

  toggleTodo(index: number) {
    this.todoservice.toggleTodo(index);
  }

  deleteTodo(todoId: number) {
    this.todoservice.deleteTodo(todoId);
    this.todos = this.todoservice.getAll();
  }


}
