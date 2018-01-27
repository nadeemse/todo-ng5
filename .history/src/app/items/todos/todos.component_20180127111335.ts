import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

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
  title: String = 'Add new Todo';
  todoForm: any = FormGroup;
  constructor(private itemService: ItemService, public fb: FormBuilder) { }

  ngOnInit() {

    this.itemService.getAll().subscribe(
      (items) => {
          console.log(items);
          this.items = items;
      }
    );
  }

  initForm() {
    this.todoForm = this.fb.group({
      id: '',
      title: [ '' , Validators.required],
      note: [ '' , Validators.required],
      due_at: '',
      tags: '',
      type: '',
      checked: false,
    });
  }

  showForm() {
      $('.modal').modal();
  }

  updateTodo(item: any) {
    this.title = 'Update ToDo ' + item.title;
    this.item = item;
    this.showForm();
  }

  onSubmit() {
    
  }

  closeModal() {
    $('.modal').modal('hide');
  }

}
