import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGOEventsCKK';

  public logged:boolean = true;
  //the "logged" flag should be true if someone's logged in.
  //if not, it should be set to false.

  // a logout function
  logout()
  {
    //here's the log out function
    this.logged=false;
    //redirect them to home page
  }
}
