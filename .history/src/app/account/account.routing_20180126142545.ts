import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const FRANCHISE_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: 'profile', component: PosVendorComponent },
        { path: 'login', component: FranchisesComponent },
        { path: 'signup', component: NewFranchiseComponent }
    ]}
];

export const FranchiseRouting = RouterModule.forChild(FRANCHISE_ROUTES);
