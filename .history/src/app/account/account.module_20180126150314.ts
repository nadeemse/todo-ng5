import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AccountComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent
    ],
    imports: [
    ],
    providers: [
    ]
})
export class AccountModule {}
