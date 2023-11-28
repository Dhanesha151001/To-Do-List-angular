import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { TodoComponent } from "./MyComponents/todo/todo.component";
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [TodoComponent,TodoItemsComponent,RouterOutlet,]
    
})
export class AppComponent {
  title = 'To-Do-List';
  constructor(){
    setTimeout(()=>{
      
    })

  }
}
