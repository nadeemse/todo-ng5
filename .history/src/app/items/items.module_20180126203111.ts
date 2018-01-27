import { NgModule } from '@angular/core';

import { AccountComponent } from './items.component';

import { ItemsRouting } from './items.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        AccountComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent
    ],
    imports: [
        ItemsRouting,
        SharedModule
    ],
    providers: [
    ]
})
export class AccountModule {}
