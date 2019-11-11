import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { APIService, Event } from '../api.service';
import { httpOptions, showMsg_for_editing_key } from '../user-view-admin/user-view-admin.component';

@Component({
  selector: 'app-event-edit-admin',
  templateUrl: './event-edit-admin.component.html',
  styleUrls: ['./event-edit-admin.component.css']
})


export class EventEditAdminComponent implements OnInit {
  public events: any


  //I don't know how the image will be stored, so that property is skipped.
  //variable names will have to be modified according to the database
  constructor(private router: Router, private route: ActivatedRoute, private _data: APIService) { }

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

          localStorage.setItem(showMsg_for_editing_key,'true')
          subscriber.unsubscribe()
        }


      )

  }
  userMgmtNav() {
    //side nav bar: only navigation required on click
    this.router.navigate(['/admin-user-mgmt']);
  }
  eventMgmtNav() {
    //side nav bar: only navigation required on click
    this.router.navigate(['/admin-event-mgmt']);
  }
  userViewNav() {
    //side nav bar: only navigation required on click
    this.router.navigate(['/user-view']);
  }

  saveEvent(eventEdit: NgForm) {
    //PUT to events table logic here
    //read the data using eventEdit.values, which gives you a JSON
    console.log(eventEdit.value);
    var subscriber = this._data.putEventbyId(this.id, this.events, httpOptions).subscribe
      (

        (data) => {
          console.log("This is the data6" + JSON.stringify(data))
          subscriber.unsubscribe()
          this.router.navigate(['/admin-event-mgmt']);



        },
        (error) => console.log(error),

        () => console.log("user updated")

      )
  }
  backToEvents() {
    //back button
    this.router.navigate(['/admin-event-mgmt']);
  }
  public url;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   this.url = event.target.result;
      //}
    }
    console.log(event.target.files[0])
  }
}
