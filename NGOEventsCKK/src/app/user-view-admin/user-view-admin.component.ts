import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { APIService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';

export const showMsg_for_creation_key = 'showMsg_for_user_creation'
export const showMsg_for_editing_key = 'showMsg_for_user_editing'

export var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('token')
  })
}

@Component({
  selector: 'app-user-view-admin',
  templateUrl: './user-view-admin.component.html',
  styleUrls: ['./user-view-admin.component.css']
})


export class UserViewAdminComponent implements OnInit {


  public users: any = [
    { fname: "John", lname: "Doe", email: "jdoe@example.com", role: "User" },
    { fname: "Jane", lname: "Doe", email: "jdoe1@example.com", role: "Admin" },
    { fname: "John", lname: "Smith", email: "jsmith@example.com", role: "User" }
  ];


  constructor(private router: Router, private route: ActivatedRoute, private _data: APIService) { }

  public httpOptions;

  showMsg_for_deletion_key = 'showMsg_for_user_deletion'
  showMsg_for_creation_key = 'showMsg_for_user_creation'
  showMsg_for_editing_key = 'showMsg_for_user_editing'
  showMsg_for_deletion
  showMsg_for_creation
  showMsg_for_editing
  ngOnInit() {
    if (localStorage.getItem(this.showMsg_for_deletion_key) == 'true')
      this.showMsg_for_deletion = 'true'
    if (localStorage.getItem(this.showMsg_for_creation_key) == 'true')
      this.showMsg_for_creation = 'true'
      if (localStorage.getItem(this.showMsg_for_editing_key) == 'true')
      this.showMsg_for_editing = 'true'

    localStorage.removeItem(this.showMsg_for_creation_key)
    localStorage.removeItem(this.showMsg_for_deletion_key)
    localStorage.removeItem(this.showMsg_for_editing_key)



    console.log(this.showMsg_for_deletion)
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      })
    };


    var subscriber = this._data.getUsers(this.httpOptions).subscribe(
      (data) => {
        this.users = data;
        this.users.forEach(element => {
          console.log(element)
        });
        subscriber.unsubscribe()
      },
      (error) => console.log(error),
      () => console.log("Users should have been recieved")
    )
  }
  userCreate() {
    //navigation only
    this.router.navigate(['/admin-user-create']);
  }
  userEdit(id: any) {
    console.log(id)
    this.router.navigate(['/admin-user-edit', { 'id': id }]);
  }
  userDelete(id: any) {
    var subscriber = this._data.deleteUserbyId(id, httpOptions).subscribe
      (
        (data) => {
          console.log("This is the data8" + JSON.stringify(data))

          subscriber.unsubscribe()
          localStorage.setItem(this.showMsg_for_deletion_key, 'true')
          this.router.navigate(['/admin-user-mgmt'])
            .then(() => {
              window.location.reload();
            });

        },
        (error) => console.log(error),

        () => console.log("user deleted")
      )
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
}
