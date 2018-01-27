import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { TimepickerModule } from 'ngx-bootstrap';
import { ToastComponent } from './toast/toast.component';


@NgModule({
    declarations: [
        ToastComponent
    ],
    imports: [
        TimepickerModule.forRoot(),
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TimepickerModule,
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastComponent
    ],
    providers: [
        ToastComponent
    ]
})
export class SharedModule {}
