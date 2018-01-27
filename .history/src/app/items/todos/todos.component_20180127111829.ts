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
  todoIndex: any;
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

    const formData = this.todoForm.value;

    if ( !(formData.id > 0) ) {
        this.addTodo(formData);
    } else {
      this.updateData(formData, formData.id);
    }
  }

  closeModal() {
    $('.modal').modal('hide');
  }

  addTodo(formData) {
    this.itemService.storeItem(formData).subscribe(
      (response) => {
        this.items.push(response);
        this.closeModal();
        this.toast.setMessage('You have just added a new branch ' + response.name, 'success', 6000);
      }
    );
  }

  updateData(formData, id) {
    this.itemService.updateItem(formData, id).subscribe(
      (response) => {
        this.items[this.todoIndex] = response;
        this.closeModal();
        this.toast.setMessage('You have just updated ' + response.name, 'success', 6000);
      }
    );
  }


  editTodo(index: any) {
    this.todoIndex = index;
    const item = this.items[index];
    for ( const key in item ) {
      this.todoForm.get(key).setValue( item[key] );
    }
    this.showModal();
  }

}
