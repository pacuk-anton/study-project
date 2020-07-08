import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../app/users/users.component';
import {RolesComponent} from '../app/roles/roles.component';
import {HomeComponent} from '../app/home/home.component';
import {UserResolver} from '../resolvers/resolvers';

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {users: UserResolver}},
  {path: 'roles', component: RolesComponent},
  // keep last
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
