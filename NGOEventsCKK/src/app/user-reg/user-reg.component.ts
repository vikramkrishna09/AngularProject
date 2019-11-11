import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { User, APIService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private _data:APIService) { }

  subscriber;
  showMsg: boolean = false;
  ngOnInit() {
  }
  loginNav()
  {
    //navigation only
    this.router.navigate(['/home'])
  }
  afterRegister(formData: any)
  {
    console.log(formData.value)
    var newUser = new User
    newUser.Email = formData.value.email
    newUser.Password = formData.value.pass
    newUser.FirstName = formData.value.fname
    newUser.LastName = formData.value.lname
    newUser.Role = 'User'
    newUser = JSON.parse(JSON.stringify(newUser))
    console.log("newUser is " + JSON.stringify(newUser));
    var A  = this._data.signUp(newUser).subscribe
    (
      (data) =>
      { console.log(JSON.stringify(data)),
        this.showMsg = true
        A.unsubscribe()
      },
        

      (error) => console.log(error)

    )


    //add to user table logic here
    //this.router.navigate(['/user-view'])
  }
}
