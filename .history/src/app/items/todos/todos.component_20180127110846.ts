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
    this.branchForm = this.fb.group({
      id: '',
      country_id: countryId,
      name: [ '' , Validators.required],
      opening_hours: [ '' , Validators.required],
      open_time: [ '' , Validators.required],
      close_time: [ '' , Validators.required],
      detailed_address: [ '' , Validators.required],
      city: [ '' , Validators.required],
      lat: [ '' , Validators.required],
      lng: [ '' , Validators.required],
      server_url: [ '' , Validators.required],
      endpoint_url: [ '' , Validators.required],
      endpoint_vendor: [ 'swich' , Validators.required],
      endpoint_user: [ 'swich' , Validators.required],
      endpoint_password: [ 'swich' , Validators.required],
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
