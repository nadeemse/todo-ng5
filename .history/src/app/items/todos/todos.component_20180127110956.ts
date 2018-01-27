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
  model: any = {
    title: 'Add new Todo'
  };
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
      locationID: [ '' , Validators.required],
      locationToken: [ '046a5e6b-d905-499b-8e72-dacb2f46a0cd' , Validators.required],
      branchAreas: new FormArray([]),
    });
  }

  showForm() {
      $('.modal').modal();
  }

  updateTodo(item: any) {
    this.model.title = 'Update ToDo ' + item.title;
    this.item = item;
    this.showForm();
  }

  onSubmit() {
    
  }

  closeModal() {
    $('.modal').modal('hide');
  }

}
