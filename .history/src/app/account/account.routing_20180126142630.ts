import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const ACCOUNT_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const FranchiseRouting = RouterModule.forChild(ACCOUNT_ROUTES);
