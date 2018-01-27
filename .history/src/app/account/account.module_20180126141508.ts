import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TimepickerModule } from 'ngx-bootstrap';

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
