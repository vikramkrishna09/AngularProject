import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserViewAdminComponent } from './user-view-admin/user-view-admin.component';
import { EventViewAdminComponent } from './event-view-admin/event-view-admin.component';
import { UserEditAdminComponent } from './user-edit-admin/user-edit-admin.component';
import { UserCreateAdminComponent } from './user-create-admin/user-create-admin.component';
import { EventCreateAdminComponent } from './event-create-admin/event-create-admin.component';
import { EventEditAdminComponent } from './event-edit-admin/event-edit-admin.component';
import { EventRegUserComponent } from './event-reg-user/event-reg-user.component';
import { EventDetailsUserComponent } from './event-details-user/event-details-user.component';
import { EventRegDetailsUserComponent } from './event-reg-details-user/event-reg-details-user.component';

import {AuthGuardService as AuthGuard} from './auth-guard.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';




const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component: LoginComponent},
  {path:"register",component: UserRegComponent},

  //admin paths
  {path:"", component: UserViewAdminComponent},
  {path:"admin-event-mgmt", component: EventViewAdminComponent,canActivate:[AuthGuard]},
  {path:"admin-user-mgmt", component:UserViewAdminComponent,canActivate:[AuthGuard]},
  {path:"admin-user-create", component:UserCreateAdminComponent,canActivate:[AuthGuard]},
  {path:"admin-user-edit", component:UserEditAdminComponent,canActivate:[AuthGuard]},
  {path:"admin-event-create",component:EventCreateAdminComponent,canActivate:[AuthGuard]},
  {path:"admin-event-edit", component:EventEditAdminComponent,canActivate:[AuthGuard]},
  
  //user paths
  {path:"user-view",component:EventRegUserComponent,canActivate:[AuthGuard]},
  {path:"event-details", component:EventDetailsUserComponent,canActivate:[AuthGuard]},
  {path:"event-register", component:EventRegDetailsUserComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
