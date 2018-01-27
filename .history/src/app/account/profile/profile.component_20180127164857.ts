import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  constructor( private router: Router ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  gotoTodo() {
    this.router.navigate(['/items']);
  }

}
