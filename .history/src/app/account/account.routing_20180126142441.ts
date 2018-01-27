import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';

const ACCOUNT_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
    ]}
];

export const AccountRouting = RouterModule.forChild(ACCOUNT_ROUTES);
