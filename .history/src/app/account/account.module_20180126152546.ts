import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { AccountRouting } from './account.routing';
import { SharedModule }


@NgModule({
    declarations: [
        AccountComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent
    ],
    imports: [
        AccountRouting
    ],
    providers: [
    ]
})
export class AccountModule {}
