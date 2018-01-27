import { Component, OnInit } from '@angular/core';

import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
