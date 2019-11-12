import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { APIService, User } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router, private route:ActivatedRoute,private _data: APIService) { }

  subscriber;

  ngOnInit() {
  }
  registerNav()
  {
    //navigation only
    this.router.navigate(['/register'])
  }
  afterLogin(ngForm: any)
  {
    //logic to determine whether user is admin or simple user
    //redirect them accordingly
    //store into session storage
    //this is a placeholder route for now.

    const email = ngForm.value.email
    const password = ngForm.value.pass
    var flag = 0

    console.log(email)
    console.log(password)

    if(email == undefined)
    {
      ngForm.form.controls['email'].setErrors({required: true});
      flag += 1
    }
    if(password == undefined)
    {
    ngForm.form.controls['pass'].setErrors({required: true});
    flag += 1
    }

    if(flag == 1 || flag == 2)
      return;
    

      var RegisteredUser = new User
    RegisteredUser.Email = email
    RegisteredUser.Password = password


    RegisteredUser = JSON.parse(JSON.stringify(RegisteredUser))
    console.log("RegisteredUser is " + JSON.stringify(RegisteredUser));
    this.subscriber = this._data.signIn(RegisteredUser).subscribe
    (
      (data) => {
      console.log('reached')
      console.log(data)
      const Role = data.Role
      localStorage.setItem('loggedinid',data._id)
      localStorage.setItem('token',data.token)
      localStorage.setItem('usertype',Role)
      console.log(localStorage.getItem('token'))
      ngForm.form.controls['email'].setErrors({invalid: false});
      ngForm.form.controls['pass'].setErrors({invalid: false});

      if(Role == "Admin")
      {

        this.router.navigate(['/admin-user-mgmt'])
        this.subscriber.unsubscribe()

      }

      if(Role == "User")
      {
        this.router.navigate(['/user-view']);

        this.subscriber.unsubscribe()
      }


      },
      
      (error) => 
      {console.log(error)
      ngForm.form.controls['email'].setErrors({invalid: true});
      ngForm.form.controls['pass'].setErrors({invalid: true});
      this.subscriber.unsubscribe

      
      }
    )
    
    //this.router.navigate(['/admin-user-mgmt'])
  }
}
