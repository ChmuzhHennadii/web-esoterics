import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: ":id", component: UserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
