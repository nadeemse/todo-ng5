import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { TimepickerModule } from 'ngx-bootstrap';
import { ToastComponent } from './toast/toast.component';


@NgModule({
    declarations: [],
    imports: [
        TimepickerModule.forRoot(),
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastComponent
    ],
    export: [
        TimepickerModule,
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule {}
