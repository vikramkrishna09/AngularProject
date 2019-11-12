import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventViewAdminComponent } from './event-view-admin/event-view-admin.component';
import { UserViewAdminComponent } from './user-view-admin/user-view-admin.component';
import { EventRegUserComponent } from './event-reg-user/event-reg-user.component';
import { UserEditAdminComponent } from './user-edit-admin/user-edit-admin.component';
import { UserCreateAdminComponent } from './user-create-admin/user-create-admin.component';
import { EventCreateAdminComponent } from './event-create-admin/event-create-admin.component';
import { EventRegDetailsUserComponent } from './event-reg-details-user/event-reg-details-user.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { LoginComponent } from './login/login.component';
import { EventDetailsUserComponent } from './event-details-user/event-details-user.component';
import { EventEditAdminComponent } from './event-edit-admin/event-edit-admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIService } from './api.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { JwtHelperService, JWT_OPTIONS, JwtModuleOptions } from '@auth0/angular-jwt';
import { JwtModule } from "@auth0/angular-jwt";




export function tokenGetter() {
  return localStorage.getItem("token");
}


const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: tokenGetter,
  }
};




@NgModule({
  declarations: [
    AppComponent,
    EventViewAdminComponent,
    UserViewAdminComponent,
    EventRegUserComponent,
    UserEditAdminComponent,
    UserCreateAdminComponent,
    EventCreateAdminComponent,
    EventRegDetailsUserComponent,
    UserRegComponent,
    LoginComponent,
    EventDetailsUserComponent,
    EventEditAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot(JWT_Module_Options)

  ],
  providers: [APIService,AuthGuardService,AuthService,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
