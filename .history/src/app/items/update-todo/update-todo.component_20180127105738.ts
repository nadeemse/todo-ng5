import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {

  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

  updateTodo() {
    
  }

}
