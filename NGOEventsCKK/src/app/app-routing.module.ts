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


const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component: LoginComponent},
  {path:"register",component: UserRegComponent},

  //admin paths
  {path:"", component: UserViewAdminComponent},
  {path:"admin-event-mgmt", component: EventViewAdminComponent},
  {path:"admin-user-mgmt", component:UserViewAdminComponent},
  {path:"admin-user-create", component:UserCreateAdminComponent},
  {path:"admin-user-edit", component:UserEditAdminComponent},
  {path:"admin-event-create",component:EventCreateAdminComponent},
  {path:"admin-event-edit", component:EventEditAdminComponent},
  
  //user paths
  {path:"user-view",component:EventRegUserComponent},
  {path:"event-details", component:EventDetailsUserComponent},
  {path:"event-register", component:EventRegDetailsUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
