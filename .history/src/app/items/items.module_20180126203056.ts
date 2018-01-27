import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { ItemsRouting } from './account.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        AccountComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent
    ],
    imports: [
        AccountRouting,
        SharedModule
    ],
    providers: [
    ]
})
export class AccountModule {}
