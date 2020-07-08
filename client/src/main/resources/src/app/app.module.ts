import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RoutingModule} from '../routing/routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {RolesComponent} from './roles/roles.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolver} from '../resolvers/resolvers';
import {GridModule} from '@progress/kendo-angular-grid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    // main component
    AppComponent,
    // user defined
    UsersComponent,
    RolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
