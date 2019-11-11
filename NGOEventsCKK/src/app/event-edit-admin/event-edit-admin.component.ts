import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { APIService } from '../api.service';

@Component({
  selector: 'app-event-edit-admin',
  templateUrl: './event-edit-admin.component.html',
  styleUrls: ['./event-edit-admin.component.css']
})

export class EventEditAdminComponent implements OnInit {
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
  }
  

  //I don't know how the image will be stored, so that property is skipped.
  //variable names will have to be modified according to the database
  constructor(private router:Router, private route:ActivatedRoute,private _data:APIService) { }

  ngOnInit() {
    console.log(this.events);
  }
  userMgmtNav(){
    //side nav bar: only navigation required on click
    this.router.navigate(['/admin-user-mgmt']);
  }
  eventMgmtNav(){
    //side nav bar: only navigation required on click
    this.router.navigate(['/admin-user-mgmt']);
  }
  userViewNav(){
    //side nav bar: only navigation required on click
    this.router.navigate(['/user-view']);
  }

  saveEvent(eventEdit:NgForm){
    //PUT to events table logic here
    //read the data using eventEdit.values, which gives you a JSON
    console.log(eventEdit.value);
    this.router.navigate(['/admin-event-mgmt']);
  }
  backToEvents(){
    //back button
    this.router.navigate(['/admin-event-mgmt']);
  }
  public url;
  onSelectFile(event) 
  { // called each time file input changes
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
