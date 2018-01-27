import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';

const FRANCHISE_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
    ]}
];

export const FranchiseRouting = RouterModule.forChild(FRANCHISE_ROUTES);
