import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @ViewChild('todoInput') todoInput: ElementRef;

  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(data: string) {
    this.todoservice.addTodo(data);
    this.todoInput.nativeElement.value = '';
  }

}
