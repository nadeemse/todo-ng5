import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

import { ItemService } from '../../services/item.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import * as moment from 'moment';

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
  minDate: any = new Date(2015, 1, 10);
  maxDate: any = new Date(2020, 1, 25);
  constructor(private itemService: ItemService, public fb: FormBuilder, public toast: ToastComponent) { }

  ngOnInit() {

    this.initItems();
    this.initForm();
  }

  initForm() {
    this.todoForm = this.fb.group({
      id: '',
      title: [ '' , Validators.required],
      note: [ '' , Validators.required],
      due_at: moment(Date.now()).format('YYYY-MM-DD'),
      tags: '',
      type: [ 'todo' , Validators.required],
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
        this.closeModal();
        this.toast.setMessage('You have just added a new todo', 'success', 6000);
        this.initItems();
      }
    );
  }

  updateData(formData, id) {
    this.itemService.updateItem(formData, id).subscribe(
      (response) => {
        this.closeModal();
        this.toast.setMessage('You have just updated ' + formData.title, 'success', 6000);
        this.initItems();
      }
    );
  }


  editTodo(item: any) {
    this.todoIndex = this.items.indexOf(item);
    for ( const key in item ) {
      if (item[key] && this.todoForm.get(key) ) {
        this.todoForm.get(key).setValue( item[key] );
      }
    }
    this.showForm();
  }

  markAsComplted (item: any) {
    this.todoIndex = this.items.indexOf(item);
    item.checked = true;
    this.updateData(item, item.id);
  }

  filterItems (isChecked) {
    return this.items.filter( (book: any) => book.checked === isChecked);
  }

  initItems() {
    this.itemService.getAll().subscribe(
      (items) => {
          this.items = items;
      }
    );
  }

  deleteItem(item: any) {
    this.todoIndex = this.items.indexOf(item);
    this.itemService.deleteItem(item).subscribe(
      (items) => {
         this.items.splice(todoIndex, 1);
      }
    );
  }

}
