import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-event-reg-details-user',
  templateUrl: './event-reg-details-user.component.html',
  styleUrls: ['./event-reg-details-user.component.css']
})
export class EventRegDetailsUserComponent implements OnInit {

  public next:boolean;

  public eventRegDeet={};
  //   "fname":"",
  //   "lname":"",
  //   "email":"",
  //   "phone":"",
  //   "addr":"",
  //   "adulttix":0,
  //   "childtix":0
  // };

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.next=false;
  }

  regConfirmNav(eventRegDetails: NgForm)
  {
    this.next=true;
    this.eventRegDeet=eventRegDetails.value;
  }
  backToEventDetails()
  {
    this.next=false;
    this.router.navigate(['/event-details']);
  }
  onRegister()
  {
    //write eventRegDeets into database
    this.router.navigate(['/user-view']);
  }
  backToDetails()
  {
    this.next=false;
    this.router.navigate(['/event-register']);
  }
}
