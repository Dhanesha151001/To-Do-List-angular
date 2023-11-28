  import { Component, Inject, OnInit,} from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Todo } from "../../Todo";
  import { TodoItemsComponent } from "../todo-items/todo-items.component";
  import { AddTodoComponent } from '../add-todo/add-todo.component';



  @Component({
      selector: 'app-todo',
      standalone: true,
      templateUrl: './todo.component.html',
      styleUrl: './todo.component.css',
      imports: [CommonModule,TodoComponent, TodoItemsComponent,AddTodoComponent,]
  })
  export class TodoComponent implements OnInit{
    localItem: string | null;
    

    todos!: Todo[];
    constructor(){
      
      this.localItem = this.getFromLocalStorage('todos');
      this.todos = this.localItem ? JSON.parse(this.localItem) : [];
  }
  
      

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(todo);
    this.setToLocalStorage('todos', this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    console.log(todo);
    this.setToLocalStorage('todos', this.todos);
  }

  toggleTodo(todo:Todo): void {
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    this.setToLocalStorage('todos', this.todos);
  }
  
  private getFromLocalStorage(key: string): string | null {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
    }
    console.error('localStorage is not available.');
    return null;
  }

  private setToLocalStorage(key: string, value: any): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        console.error('localStorage is not available. Unable to store data.');
    }
  }


    ngOnInit(): void {
    
    }
  }
