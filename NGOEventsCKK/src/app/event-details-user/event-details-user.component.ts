import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-details-user',
  templateUrl: './event-details-user.component.html',
  styleUrls: ['./event-details-user.component.css']
})
export class EventDetailsUserComponent implements OnInit {

  public events={
    ename:"Event 1",
    edescr:"Lorem Ipsum",
    ecategory:"Conference",
    estart:"1968-11-16T00:00:00",
    eend:"1968-11-16T00:00:00",
    elocation:"New York",
    ereg: true,
    eadult:40,
    echild:20,
  };
//THIS OBJECT IS MISSING THE IMAGE PROPERTY; WHICH WILL BE ADDED ONCE IT IS FIGURED OUT
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  backToUserView()
  {
    //back button
    this.router.navigate(['/user-view']);
  }
  toRegDetails()
  {
    //goes to the next page
    this.router.navigate(['/event-register']);
  }
}
