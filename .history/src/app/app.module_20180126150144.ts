import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LeftBarComponent } from './layouts/left-bar/left-bar.component';
import { TopBarComponent } from './layouts/top-bar/top-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { HeaderInterceptor } from './interceptors/HeaderInterceptor';

// Lazy loading modules
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    LeftBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
