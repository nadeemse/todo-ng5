import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';

const ITEMS_ROUTES: Routes = [
    { path: '', component: ItemsComponent, children: [
        { path: '/', component: ProfileComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const ItemsRouting = RouterModule.forChild(ITEMS_ROUTES);
