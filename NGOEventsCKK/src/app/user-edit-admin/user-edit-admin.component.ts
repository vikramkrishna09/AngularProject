import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { APIService, User } from '../api.service';
import { httpOptions,showMsg_for_editing_key} from '../user-view-admin/user-view-admin.component'

@Component({
  selector: 'app-user-edit-admin',
  templateUrl: './user-edit-admin.component.html',
  styleUrls: ['./user-edit-admin.component.css']
})
export class UserEditAdminComponent implements OnInit {

  public user;
  public id = this.route.snapshot.paramMap.get('id')
  showMsg: boolean = false;


  constructor(private router: Router, private route: ActivatedRoute, private _data: APIService) { }

  ngOnInit() {
    var subscriber = this._data.getUserbyId(this.id, httpOptions).subscribe
      (

        (data) => {
          console.log("This is the data4" + JSON.stringify(data))
          this.user = new User
          this.user.FirstName = data.FirstName
          this.user.LastName = data.LastName
          this.user.Email = data.Email
          this.user.Password
          this.user.Role = data.Role

          localStorage.setItem(showMsg_for_editing_key,'true')
          subscriber.unsubscribe()
        },
        (error) => console.log(error),

        () => console.log("user retreived")

      )

  }

  saveUser() {
    var subscriber = this._data.putUserbyId(this.id, this.user, httpOptions).subscribe
      (

        (data) => {
          console.log("This is the data6" + JSON.stringify(data))
          this.showMsg = true
          subscriber.unsubscribe()
          


        },
        (error) => console.log(error),

        () => console.log("user updated")

      )
    this.router.navigate(['/admin-user-mgmt']);
  }

  backToUsers() {
    //navigation only
    this.router.navigate(['/admin-user-mgmt']);
  }
  eventMgmtNav() {
    //navigation only
    this.router.navigate(['/admin-event-mgmt']);
  }
  userViewNav() {
    //navigation only
    this.router.navigate(['/user-view']);
  }
  userMgmtNav() {
    //navigation only
    this.router.navigate(['/admin-user-mgmt']);
  }

  // toBoolean(str:string):boolean
  // {
  //   if(str==="Admin")
  //     return true;
  //   else
  //     return false;
  // }
}
