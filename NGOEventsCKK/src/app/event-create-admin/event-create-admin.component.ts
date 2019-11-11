import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-create-admin',
  templateUrl: './event-create-admin.component.html',
  styleUrls: ['./event-create-admin.component.css']
})
export class EventCreateAdminComponent implements OnInit {

  selectedFile: File = null;
  constructor(private router:Router, private route:ActivatedRoute, private http: HttpClient) { }
  public userDetails={};
  ngOnInit() {
  }

////////////////////////////////////////////////////////////////////////
/////////STILL NEED TO ADD IMAGE FUNCTION AND A WAY TO STORE IT/////////
////////////////////////TO THIS COMPONENT///////////////////////////////
////////////////////////////////////////////////////////////////////////


  userMgmtNav(){
    //side navigation bar: only redirects to this page on click
    this.router.navigate(['/admin-user-mgmt']);
  }
  eventMgmtNav(){
    //side navigation bar: only redirects to this page on click
    this.router.navigate(['/admin-user-mgmt']);
  }
  userViewNav(){
    //side navigation bar: only redirects to this page on click
    this.router.navigate(['/user-view']);
  }

  saveEvent(eventCreate: NgForm){
    //POST to events table logic here
    //eventCreate is the variable that has all the data in it
    //read using eventCreate.value to get a JSON of the data input by the user
    console.log(eventCreate.value);
    this.router.navigate(['/admin-event-mgmt']);
  }
  backToEvents(){
    //back button navigation logic, no need of anything else.
    this.router.navigate(['/admin-event-mgmt']);
  }
  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = <File>event.target.files[0];

  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    //////////////////////INSERT MONGO-DB INSTANCE //////////////////////////
    this.http.post('mongodb://testuser:testpw@ds123136.mlab.com:23136/eventsdb', fd)
      .subscribe(res => {
        console.log(res);
      });
  }
}