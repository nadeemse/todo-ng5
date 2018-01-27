import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

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
