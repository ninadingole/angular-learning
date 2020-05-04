import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() todoEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }

  toggleTodo() {
    this.todoEvent.emit();
  }

}
