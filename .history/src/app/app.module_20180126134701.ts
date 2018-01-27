import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';
import { ItemsComponent } from './items/items.component';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    MainComponent,
    ItemsComponent,
    LayoutsComponent,
    LeftBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
