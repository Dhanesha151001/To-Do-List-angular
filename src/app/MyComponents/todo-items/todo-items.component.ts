import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule,TodoItemsComponent],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent implements OnInit{
onClick(todo: Todo) {
  this.todoDelete.emit(todo);
  console.log("Delete has been triggered");
  
}

onCheckBoxClick(todo:Todo){
this.todoCheckBox.emit(todo);
}

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter();
  constructor(){}
  ngOnInit(): void {
   
  }

  
}
