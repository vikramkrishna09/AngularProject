import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-reg-user',
  templateUrl: './event-reg-user.component.html',
  styleUrls: ['./event-reg-user.component.css']
})
export class EventRegUserComponent implements OnInit {

  public events=[
    {ename:"Event 1", edescr:"Lorem Ipsum",  ecategory:"Conference",  estart:"1968-11-16T00:00:00",
      eend:"1968-11-16T00:00:00",  elocation:"New York", eimg:"src\assets\image-placeholder.jpg",  ereg: true,  eadult:40,  echild:20,},
    {ename:"Event 2", edescr:"Lorem Ipsum",  ecategory:"Seminar",  estart:"2019-11-16T00:00:00",
      eend:"2019-11-30T00:00:00",  elocation:"Washington D.C.", eimg:"src\assets\image-placeholder.jpg",  ereg: true,  eadult:40,  echild:20,},
    {ename:"Event 3", edescr:"Lorem Ipsum",  ecategory:"Conference",  estart:"2019-04-21T00:00:00",
      eend:"2019-05-16T00:00:00",  elocation:"Chicago", eimg:"src\assets\image-placeholder.jpg",  ereg: true,  eadult:40,  echild:20,},
    {ename:"Event 4", edescr:"Lorem Ipsum",  ecategory:"Conference",  estart:"2019-04-21T00:00:00",
      eend:"2019-05-16T00:00:00",  elocation:"Frederick", eimg:"src\assets\image-placeholder.jpg",  ereg: true,  eadult:40,  echild:20,},
    {ename:"Event 5", edescr:"Lorem Ipsum",  ecategory:"Conference",  estart:"2019-04-21T00:00:00",
      eend:"2019-05-16T00:00:00",  elocation:"Frederick", eimg:"src\assets\image-placeholder.jpg",  ereg: true,  eadult:40,  echild:20,}
    ];
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  eventDetails(){
    this.router.navigate(['/event-details']);
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
