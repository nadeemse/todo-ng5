import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  items: any = [];
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
    console.log();
  }

}
