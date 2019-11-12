import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { APIService,Event } from '../api.service';
import { httpOptions } from '../user-view-admin/user-view-admin.component';

@Component({
  selector: 'app-event-details-user',
  templateUrl: './event-details-user.component.html',
  styleUrls: ['./event-details-user.component.css']
})
export class EventDetailsUserComponent implements OnInit {

  //a dummy event i have initialized for testing purposes.
  public events
  //THIS OBJECT IS MISSING THE IMAGE PROPERTY; WHICH WILL BE ADDED ONCE IT IS FIGURED OUT
  constructor(private router: Router, private route: ActivatedRoute,private _data:APIService) { }
  public id = this.route.snapshot.paramMap.get('id')

  ngOnInit() {
    var subscriber = this._data.getEventbyId(this.id, httpOptions).subscribe
      (
        (data) => {
          this.events = new Event
          console.log(data)
          this.events.EventName = data.EventName
          this.events.EventDescription = data.EventDescription
          this.events.EventCategory = data.EventCategory
          this.events.EventLocation = data.EventLocation
          this.events.AdultTicketPrice = data.AdultTicketPrice
          this.events.ChildTicketPrice = data.ChildTicketPrice
          this.events.EventStartDateAndTime = data.EventStartDateAndTime
          this.events.EventEndDateAndTime = data.EventEndDateAndTime
          this.events.AllowRegistration = data.AllowRegistration

          subscriber.unsubscribe()
        }


      )

 }
  backToUserView() {
    //back button
    this.router.navigate(['/user-view']);
  }
  toRegDetails() {
    //goes to the next page
    //this function must always pass the event ID in the URL. 
    //all functions that retrieve event/ event details must have the ID in the URL.
    //the other option would be to store this event in local storage so that we do not
    //have to make multiple API calls.
    this.router.navigate(['/event-register',{'id': this.id,'eadult':this.events.AdultTicketPrice,'echild':this.events.ChildTicketPrice}]);
  }
}
