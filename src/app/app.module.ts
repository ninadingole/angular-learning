import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvRatingFormComponent } from './tv-rating-form/tv-rating-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import {TodoService} from './todo/shared/todo.service';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TvRatingFormComponent,
    TodoComponent,
    TodoItemComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
