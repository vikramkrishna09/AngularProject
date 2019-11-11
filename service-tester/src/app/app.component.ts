import { Component, OnInit, DoCheck } from '@angular/core';
import { MyServiceService, Event, User } from './my-service.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpHeaders } from '@angular/common/http';
import { } from './my-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  ngOnInit(): void {
    var A = new User
    A.FirstName = 'Vikram'
    A.Email = "V@gmail.com"
    A.Password = 'Kappa'


    A = JSON.parse(JSON.stringify(A))
    console.log("A is " + JSON.stringify(A));

    /*
    this._data.signUp(A).subscribe
    (
      (data) => console.log(JSON.stringify(data)),
      (error) => console.log(error)

    )
    */


    this._data.signIn(A).subscribe
      (
        (data) => {
          this.signinResponse = data,
            console.log(JSON.stringify(this.signinResponse))
          console.log(this.signinResponse.token)
          localStorage.setItem('token', this.signinResponse.token)

        },

        (error) => {
          console.log(error)

        }
      )


    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      })
    };


    /*
      this._data.getUsers(httpOptions).subscribe(
        (data) => 
        {this.users = data;
          this.users.forEach(element =>
            {
              console.log(element)
            })},
        (error) => console.log(error),
        () => console.log("Users should have been recieved")
        )
    
    
        this._data.getUserbyId("5dc4bf4374d52e461031e318",httpOptions).subscribe
        (
          
            (data) => console.log("This is the data4" + JSON.stringify(data)),
            (error) => console.log(error),
    
            () => console.log("user retreived")
          
        )
    
        this._data.getUserbyEmail("V@gmail.com",httpOptions).subscribe
          (
            
              (data) => console.log("This is the data5" + JSON.stringify(data)),
              (error) => console.log(error),
      
              () => console.log("user retreived")
            
          )
    
        A = new User
        A.LastName = 'Krishna'
        A = JSON.parse(JSON.stringify(A))
        A.Password = 'Kappa'
        
        this._data.putUserbyId("5dc4bf4374d52e461031e318",A,httpOptions).subscribe
        (
          
            (data) => console.log("This is the data6" + JSON.stringify(data)),
            (error) => console.log(error),
    
            () => console.log("user updated")
          
        )
    
        
        
        
        let kappa = this._data.putUserbyEMail("V@gmail.com",A,httpOptions).subscribe
        (
          
            (data) => console.log("This is the data7" + JSON.stringify(data)),
            (error) => console.log(error),
    
            () => console.log("user updated")
          
        )
        
    
        A = new User
        A.LastName = 'Krishna'
        A.Password = 'Kappa'
        A.FirstName = 'John'
        A.Email = 'J@gmail.com'
        A = JSON.parse(JSON.stringify(A))
        
        this._data.createUser(A,httpOptions).subscribe
        (
          (data) => console.log("This is the data8" + JSON.stringify(data)),
          (error) => console.log(error),
    
            () => console.log("user created")
        )
    
        this._data.deleteUserbyEmail('J@gmail.com',httpOptions).subscribe
        (
          (data) => console.log("This is the data8" + JSON.stringify(data)),
          (error) => console.log(error),
    
            () => console.log("user deleted")
        )
    
        
        
    
          */
    this._data.getEvents(httpOptions).subscribe(
      (data) => {
      this.events = data
        console.log("Data 10 or w/e")

        this.events.forEach(element => {
          console.log(element)
        });
      },
      (error) => console.log(error),
      () => console.log("Games should have been recieved")
    )

    this._data.getEventbyId("5dc19ccd43e6144e64556254", httpOptions).subscribe
      (
        (data) => console.log("This is the data" + JSON.stringify(data)),
        (error) => console.log(error),

        () => console.log("event retreived")
      )

    this._data.getEventbyName("Kappa", httpOptions).subscribe
      (
        (data) => console.log("This is the data2" + JSON.stringify(data)),
        (error) => console.log(error),

        () => console.log("event retreived")
      )

    var B = new Event()
    B.EventDescription = '1234444'
    B = JSON.parse(JSON.stringify(B))
    console.log("B is " + JSON.stringify(B));

    this._data.putEventbyId("5dc19ccd43e6144e64556254", B, httpOptions).subscribe
      (
        (data) => console.log("This is the data3" + JSON.stringify(data)),
        (error) => console.log(error),
        () => console.log("event updated")

      )






    localStorage.removeItem('token')

  }



  constructor(private _data: MyServiceService, ) { }
  public events: any[];
  values: any[];
  public users;
  signinResponse;




  foo(): void {




    /*
    this._data.createEvent().subscribe
    (
     
      (error) => console.log(error),

      () => console.log("event created")
      
    )
    */






    let A = new Event()
    A.EventDescription = '1234'
    A = JSON.parse(JSON.stringify(A))
    console.log("A is " + JSON.stringify(A));
















  }











  boo(): void {


    this.events.forEach(element => {
      console.log(element)
    });

    this.users.forEach(element => {
      console.log(element)
    })





  }



  title = 'service-tester';
}
