import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { APIService } from '../api.service';
import { httpOptions } from '../user-view-admin/user-view-admin.component';

@Component({
  selector: 'app-event-reg-user',
  templateUrl: './event-reg-user.component.html',
  styleUrls: ['./event-reg-user.component.css']
})
export class EventRegUserComponent implements OnInit {

  public events;
  constructor(private router:Router, private route:ActivatedRoute, private _data:APIService) { }

  userType = localStorage.getItem('userType')

  ngOnInit() {
    var subscriber = this._data.getEvents(httpOptions).subscribe(
      (data) => {
        this.events = data;
        this.events.forEach(element => {
          if(element.AllowRegistration == false)
          {
            this.events = this.events.filter(obj => obj !== element);
          }
        });
        subscriber.unsubscribe()
      },
      (error) => console.log(error),
      () => console.log("Users should have been recieved")
    )

  }
  eventDetails(id: any){

    this.router.navigate(['/event-details',{'id':id}]);
    //this function must always pass the event ID in the URL. 
    //all functions that retrieve event/ event details must have the ID in the URL.
    //the other option would be to store this event in local storage so that we do not
    //have to make multiple API calls.
  }
  eventMgmtNav()
  {
    this.router.navigate(['/admin-event-mgmt']);
  }
  userViewNav()
  {
    this.router.navigate(['/user-view']);
  }
  userMgmtNav()
  {
    this.router.navigate(['/admin-user-mgmt']);
  }
}
