import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { httpOptions } from '../user-view-admin/user-view-admin.component'
import { APIService } from '../api.service';

export const showMsg_for_creation_key = 'showMsg_for_event_creation'
export const showMsg_for_editing_key = 'showMsg_for_event_editing'

@Component({
  selector: 'app-event-view-admin',
  templateUrl: './event-view-admin.component.html',
  styleUrls: ['./event-view-admin.component.css']
})

export class EventViewAdminComponent implements OnInit {

  public events = [
    {
      ename: "Event 1", edescr: "Lorem Ipsum", ecategory: "Conference", estart: "1968-11-16T00:00:00",
      eend: "1968-11-16T00:00:00", elocation: "New York", ereg: true, eadult: 40, echild: 20,
    },
    {
      ename: "Event 2", edescr: "Lorem Ipsum", ecategory: "Seminar", estart: "2019-11-16T00:00:00",
      eend: "2019-11-30T00:00:00", elocation: "Washington D.C.", ereg: true, eadult: 40, echild: 20,
    },
    {
      ename: "Event 3", edescr: "Lorem Ipsum", ecategory: "Conference", estart: "2019-04-21T00:00:00",
      eend: "2019-05-16T00:00:00", elocation: "Chicago", ereg: true, eadult: 40, echild: 20,
    }
  ];

  showMsg_for_deletion_key = 'showMsg_for_event_deletion'
  showMsg_for_deletion
  showMsg_for_creation
  showMsg_for_editing
  constructor(private router: Router, private route: ActivatedRoute,private _data:APIService) { }
  ngOnInit() {
    console.log('event-view-admin')
    if (localStorage.getItem(this.showMsg_for_deletion_key) == 'true')
      this.showMsg_for_deletion = 'true'
    if (localStorage.getItem(showMsg_for_creation_key) == 'true')
      this.showMsg_for_creation = 'true'
    if (localStorage.getItem(showMsg_for_editing_key) == 'true')
      this.showMsg_for_editing = 'true'

    localStorage.removeItem(showMsg_for_creation_key)
    localStorage.removeItem(this.showMsg_for_deletion_key)
    localStorage.removeItem(showMsg_for_editing_key)

    var subscriber = this._data.getEvents(httpOptions).subscribe(
      (data) => {
        this.events = data;
        this.events.forEach(element => {
          console.log(element)
        });
        subscriber.unsubscribe()
      },
      (error) => console.log(error),
      () => console.log("Users should have been recieved")
    )
  }
  eventCreate() {
    //navigation only
    this.router.navigate(['/admin-event-create']);
  }
  eventEdit(id: any) {
    
    this.router.navigate(['/admin-event-edit',{'id':id}]);
  }
  userMgmtNav() {
    //navigation only
    this.router.navigate(['/admin-user-mgmt']);
  }
  userViewNav() {
    //navigation only
    this.router.navigate(['/user-view']);
  }
  eventMgmtNav() {
    //navigation only
    this.router.navigate(['/admin-event-mgmt']);
  }
}
