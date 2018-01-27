import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardLogin] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  {
     path: 'dashboard',
     component: DashboardComponent,
     canActivate: [AuthGuardAdmin, AuthGuardLogin]
  },
  {
    path: 'logs',
     loadChildren: 'app/logs/logs.module#LogsModule',
      canActivate: [AuthGuardAdmin, AuthGuardLogin]
  },
  {
    path: 'setting',
    loadChildren: 'app/setting/setting.module#SettingModule',
    canActivate: [AuthGuardAdmin, AuthGuardLogin]
  },
  {
    path: 'franchise',
    loadChildren: 'app/franchise/franchise.module#FranchiseModule',
    canActivate: [AuthGuardAdmin, AuthGuardLogin]
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
