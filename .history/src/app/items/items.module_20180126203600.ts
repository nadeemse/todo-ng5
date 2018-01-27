import { NgModule } from '@angular/core';

import { ItemsComponent } from './items.component';

import { ItemsRouting } from './items.routing';
import { SharedModule } from '../shared/shared.module';
import { TodosComponent } from './todos/todos.component';

import { AccountRouting } from './account.routing';


@NgModule({
    declarations: [
        ItemsComponent,
        TodosComponent
    ],
    imports: [
        ItemsRouting,
        SharedModule
    ],
    providers: [
    ]
})
export class ItemsModule {}
