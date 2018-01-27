import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './items.component';

const ITEMS_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: '/', component: ProfileComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const ItemsRouting = RouterModule.forChild(ITEMS_ROUTES);
