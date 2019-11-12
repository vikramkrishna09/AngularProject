import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms'
import { APIService,RegistrationDetails } from '../api.service';
import { httpOptions } from '../user-view-admin/user-view-admin.component';

@Component({
  selector: 'app-event-reg-details-user',
  templateUrl: './event-reg-details-user.component.html',
  styleUrls: ['./event-reg-details-user.component.css']
})
export class EventRegDetailsUserComponent implements OnInit {

  public next: boolean;

  public eventRegDeet;

  //all functions that retrieve event/ event details must have the ID in the URL.
  //the other option would be to store this event in local storage so that we do not
  //have to make multiple API calls.
  public events = [
    {
      ename: "Event 1", edescr: "Lorem Ipsum", ecategory: "Conference", estart: "1968-11-16T00:00:00",
      eend: "1968-11-16T00:00:00", elocation: "New York", ereg: true, eadult: 40, echild: 20,
    }];

  public echild = this.route.snapshot.paramMap.get('echild')
  public eadult = this.route.snapshot.paramMap.get('eadult')
  public echildprice;
  public eadultprice;
  public id = this.route.snapshot.paramMap.get('id')


  constructor(private router: Router, private route: ActivatedRoute,private _data: APIService) { }

  ngOnInit() {
    this.next = false;
    console.log('reached')
    console.log(this.id)
    console.log(localStorage.getItem('loggedinid'))


  }

  regConfirmNav(eventRegDetails: NgForm) {
    var loggedinid = localStorage.getItem('loggedinid')

    this.next = true;
    this.eventRegDeet = new RegistrationDetails
    this.eventRegDeet.FirstName = eventRegDetails.value.fname
    this.eventRegDeet.LastName = eventRegDetails.value.lname
    this.eventRegDeet.Email = eventRegDetails.value.email
    this.eventRegDeet.PhoneNumber = eventRegDetails.value.phone
    this.eventRegDeet.Address = eventRegDetails.value.addr
    this.eventRegDeet.NumofAdultTickets = eventRegDetails.value.adulttix
    this.eventRegDeet.NumofChildTickets = eventRegDetails.value.childtix
    this.eventRegDeet.Userref = loggedinid
    this.eventRegDeet.Eventref = this.id
    this.eventRegDeet= JSON.parse(JSON.stringify(this.eventRegDeet))


    this.eadultprice = this.eventRegDeet.NumofAdultTickets*parseInt(this.eadult)
    this.echildprice = this.eventRegDeet.NumofChildTickets*parseInt(this.echild)

 
  }
  backToEventDetails() {
    this.next = false;
    this.router.navigate(['/event-details']);
  }
  onRegister() {
    var subscriber = this._data.postEventRegistration(this.eventRegDeet,httpOptions).subscribe
    (
      (data) => 
      {
        subscriber.unsubscribe()
        this.router.navigate(['/user-view']);
      }
    )    
  }
  backToDetails() {
    this.next = false;
    this.router.navigate(['/event-register']);
  }
}
