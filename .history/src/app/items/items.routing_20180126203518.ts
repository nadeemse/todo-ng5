import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { TodosComponent } from './todos/todos.component';


const ITEMS_ROUTES: Routes = [
    { path: '', component: ItemsComponent, children: [
        { path: '/', component: TodosComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const ItemsRouting = RouterModule.forChild(ITEMS_ROUTES);
