import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TimepickerModule } from 'ngx-bootstrap';
import { FranchiseService } from '../services/franchise.service';
import { OauthClientService } from '../services/oauth-client.service';
import { SettingService } from '../services/setting.service';
import { BranchService } from '../services/branch.service';
import { DashboardModuleService } from '../services/dashboard-module.service';
import { AdminUsersService } from '../services/admin-users.service';

import { FranchiseComponent } from './franchise.component';
import { FranchiseRouting } from './franchise.routing';
import { PosVendorComponent } from './pos-vendor/pos-vendor.component';
import { FranchisesComponent } from './franchises/franchises.component';
import { ShowFranchiseComponent } from './show-franchise/show-franchise.component';
import { FranchiseAppsComponent } from './franchise-apps/franchise-apps.component';
import { BranchesComponent } from './branches/branches.component';
import { NewFranchiseComponent } from './new-franchise/new-franchise.component';
import { AdminModulesComponent } from './admin-modules/admin-modules.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
    declarations: [
        FranchiseComponent,
        PosVendorComponent,
        FranchisesComponent,
        ShowFranchiseComponent,
        FranchiseAppsComponent,
        BranchesComponent,
        NewFranchiseComponent,
        AdminModulesComponent,
        AdminUsersComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgxPaginationModule,
        FranchiseRouting,
        TimepickerModule.forRoot()
    ],
    providers: [
        FranchiseService,
        OauthClientService,
        SettingService,
        BranchService,
        DashboardModuleService,
        AdminUsersService
    ]
})
export class FranchiseModule {}
