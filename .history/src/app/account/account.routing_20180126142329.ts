import { Routes, RouterModule } from '@angular/router';

import { FranchiseComponent } from '../franchise/franchise.component';
import { PosVendorComponent } from './pos-vendor/pos-vendor.component';
import { FranchisesComponent } from './franchises/franchises.component';
import { ShowFranchiseComponent } from './show-franchise/show-franchise.component';
import { FranchiseAppsComponent } from './franchise-apps/franchise-apps.component';
import { BranchesComponent } from './branches/branches.component';
import { NewFranchiseComponent } from './new-franchise/new-franchise.component';

const FRANCHISE_ROUTES: Routes = [
    { path: '', component: FranchiseComponent, children: [
        { path: 'pos-vendors', component: PosVendorComponent },
        { path: 'franchise', component: FranchisesComponent },
        { path: 'franchise/create', component: NewFranchiseComponent },
        { path: 'franchise/:id', component: ShowFranchiseComponent }
    ]}
];

export const FranchiseRouting = RouterModule.forChild(FRANCHISE_ROUTES);
