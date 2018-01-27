import { Component, Input } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message = { body: '', type: '' };

  setMessage(body, type, time = 3000) {

    this.message.body = body;
    this.message.type = type;
    $.Notification.notify(
      this.message.type,
      'right middle',
      '',
      this.message.body);

    setTimeout(() => { this.message.body = ''; }, time);
  }
}
