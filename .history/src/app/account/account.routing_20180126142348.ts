import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from '../franchise/franchise.component';

const FRANCHISE_ROUTES: Routes = [
    { path: '', component: FranchiseComponent, children: [
        { path: 'pos-vendors', component: PosVendorComponent },
        { path: 'franchise', component: FranchisesComponent },
        { path: 'franchise/create', component: NewFranchiseComponent },
        { path: 'franchise/:id', component: ShowFranchiseComponent }
    ]}
];

export const FranchiseRouting = RouterModule.forChild(FRANCHISE_ROUTES);
