import { NgModule } from '@angular/core';

import { ItemsComponent } from './items.component';

import { ItemsRouting } from './items.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ItemsComponent
    ],
    imports: [
        ItemsRouting,
        SharedModule
    ],
    providers: [
    ]
})
export class ItemsModule {}
