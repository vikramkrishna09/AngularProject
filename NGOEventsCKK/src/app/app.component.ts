import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGOEventsCKK';

  constructor(private router:Router)
{}
  public logged:boolean = true;
  //the "logged" flag should be true if someone's logged in.
  //if not, it should be set to false.

  // a logout function
  logout()
  {
    localStorage.clear()
    this.logged=false;
    this.router.navigate(['/home'])
  }
}
