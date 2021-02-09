import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'atp-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'ToDos';
  todos: Todo[] | undefined;

  inputTodo: string;
  constructor() {
    this.inputTodo = '';
  }

  ngOnInit(): void {
    this.todos = [
      {
        text: 'First Todo',
        completed: false,
      },
      {
        text: 'Second Todo',
        completed: true,
      }
    ];
  }
  toggleDone(id: number): void {
    this.todos?.map((value, index) => {
      if (index === id) {
        value.completed = !value.completed;
      }
      return value;
    });
  }
  delete(id: number): void {
    this.todos = this.todos?.filter((value, index) => index !== id);
  }
  addTodo(): void {
    this.todos?.push({
      text: this.inputTodo,
      completed: false,
    })
  }
}


