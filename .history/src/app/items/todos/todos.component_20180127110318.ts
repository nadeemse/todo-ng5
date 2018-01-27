import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';

declare const $: any;
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  items: any = [];
  isNew: Boolean = false;
  item: any = {};
  model: any = {
    title: 'Add new Todo'
  };
  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.itemService.getAll().subscribe(
      (items) => {
          console.log(items);
          this.items = items;
      }
    );
  }

  addTodo() {
      
  }

  updateTodo(item: any) {
    this.model.title = 'Update ToDo ' + item.title;
    this.item = item;
  }

}
