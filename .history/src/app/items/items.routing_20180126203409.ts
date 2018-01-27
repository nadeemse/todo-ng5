import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const ITEMS_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: '.', component: ProfileComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const ItemsRouting = RouterModule.forChild(ITEMS_ROUTES);
