import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User, APIService } from '../api.service';
import { Local } from 'protractor/built/driverProviders';
import {showMsg_for_creation_key, httpOptions} from '../user-view-admin/user-view-admin.component'

@Component({
  selector: 'app-user-create-admin',
  templateUrl: './user-create-admin.component.html',
  styleUrls: ['./user-create-admin.component.css']
})
export class UserCreateAdminComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private _data:APIService) { }

  ngOnInit() {
  }
  saveUser(userCreate:NgForm)
  {
    var newUser = new User
    var formData = userCreate
    newUser.Email = formData.value.email
    newUser.Password = formData.value.pass
    newUser.FirstName = formData.value.fname
    newUser.LastName = formData.value.lname
    newUser.Role = formData.value.role
    newUser = JSON.parse(JSON.stringify(newUser))
    console.log("newUser is " + JSON.stringify(newUser));
    var subscriber  = this._data.createUser(newUser,httpOptions).subscribe
    (
      (data) =>
      { console.log(JSON.stringify(data)),
        subscriber.unsubscribe()
        localStorage.setItem(showMsg_for_creation_key,'true')
        this.router.navigate(['/admin-user-mgmt'],{replaceUrl:false});

      },
        

      (error) => console.log(error)

    )
  }

  backToUsers()
  {
    //navigation only
    this.router.navigate(['/admin-user-mgmt']);
  }

  eventMgmtNav()
  {
    //navigation only
    this.router.navigate(['/admin-event-mgmt']);
  }
  userViewNav()
  {
    //navigation only
    this.router.navigate(['/user-view']);
  }

  userMgmtNav()
  {
    //navigation only
    this.router.navigate(['/admin-user-mgmt']);
  }
}
