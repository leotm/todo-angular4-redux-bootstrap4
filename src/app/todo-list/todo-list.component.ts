import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, REMOVE_ALL_ITEMS } from '../actions';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  model: ITodo = {
    id: 0,
    description: "",
    urgency: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  obSubmit() {
    this.ngRedux.dispatch({type: ADD_ITEM, todo: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_ITEM, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_ITEM, id: todo.id });
  }

  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_ITEMS});
  }
}
