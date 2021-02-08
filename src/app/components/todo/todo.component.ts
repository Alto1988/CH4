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
  constructor() { }

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
    ]
  }

}

