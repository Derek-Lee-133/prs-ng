import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  { path: 'user-list', component: UserListComponent },
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'user-create', component: UserCreateComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
