import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError,Observable} from "rxjs";
import {catchError, map} from "rxjs/operators"



export class Event
{
  
  EventName: string
  EventDescription: string
  EventCategory: string
  EventStartDate: string
  EventEndDate:String
  EventStartTime:String
  EventEndTime:String
  EventLocation:String
  AllowRegistration:Boolean
  EventImage:String
  AdultTicketPrice:String
  ChildTicketPrice:String
}

export class User
{
  FirstName: string
  Email:string
  Password: string
  LastName: string
  Role: string
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private event_url = "http://localhost:4000/api/events";
  private eventbyname_url = "http://localhost:4000/api/events/by-name";
  private user_url = "http://localhost:4000/api/users"
  private userbyemail_url = "http://localhost:4000/api/users/by-email"

  private signupurl = "http://localhost:4000/api/signup"

  private signinurl = "http://localhost:4000/api/signin"

   
  
  
  constructor(private http:HttpClient) {
    

   }

 

  values: any

   getEvents(httpOptions): Observable<any>{
     const val = this.http
    .get(this.event_url,httpOptions)
    .pipe(
 catchError(this.catcher))
      return val
   }

   

   createEvent(val,httpOptions): Observable<any>
   {
      
      console.log(val)
      return this.http.post(this.event_url,val,httpOptions)
      .pipe(catchError(this.catcher))
   }


   getEventbyId(id: string,httpOptions): Observable<any>
   {
     let urlstring = this.event_url + "/" + id
     console.log(urlstring)
     let val =  this.http.get(urlstring,httpOptions)
     .pipe(
      catchError(this.catcher))
      console.log(val)
      return val

   }
   getEventbyName(id: string,httpOptions): Observable<any>
   {
     let urlstring = this.eventbyname_url + "/" + id
     console.log(urlstring)
     let val =  this.http.get(urlstring,httpOptions)
     .pipe(
      catchError(this.catcher))
      console.log(val)
      return val

   }

   putEventbyId(id: string,updateddata: any,httpOptions): Observable<any>
   {
     let urlstring = this.event_url + "/" + id
     console.log(urlstring)
     let val =  this.http.put(urlstring,updateddata,httpOptions)
     .pipe(
      catchError(this.catcher))
      return val

   }

   putEventbyName(id: string,updateddata: any,httpOptions): Observable<any>
   {
     let urlstring = this.eventbyname_url + "/" + id
     console.log(urlstring)
     let val =  this.http.put(urlstring,updateddata,httpOptions)
     .pipe(
      catchError(this.catcher))
      return val

   }


   signUp(val: any): Observable<any>
   {
      
      console.log(val)
      return this.http.post(this.signupurl,val)
      .pipe(catchError(this.catcher))
   }

   signIn(val: any): Observable<any>
   {
      
      let vall = this.http.post(this.signinurl,val)
      .pipe(catchError(this.catcher))
      return vall
   }

   
   getUsers(httpOptions): Observable<any>{
    
      
   console.log(httpOptions)
    const val = this.http
   .get(this.user_url,httpOptions)
   .pipe(
catchError(this.catcher))
     return val
  }




  createUser(val,httpOptions): Observable<any>
  {
     
     console.log(val)
     return this.http.post(this.user_url,val,httpOptions)
     .pipe(catchError(this.catcher))
  }

  getUserbyId(id: string,httpOptions): Observable<any>
   {
     let urlstring = this.user_url + "/" + id
     console.log(urlstring)
     let val =  this.http.get(urlstring,httpOptions)
     .pipe(
      catchError(this.catcher))
      console.log(val)
      return val

   }


   getUserbyEmail(id: string,httpOptions): Observable<any>
   {
     let urlstring = this.userbyemail_url + "/" + id
     console.log(urlstring)
     let val =  this.http.get(urlstring,httpOptions)
     .pipe(
      catchError(this.catcher))
      console.log(val)
      return val

   }

   putUserbyId(id: string,updateddata: any,httpOptions): Observable<any>
   {
     let urlstring = this.user_url + "/" + id
     console.log(urlstring)
     let val =  this.http.put(urlstring,updateddata,httpOptions)
     .pipe(
      catchError(this.catcher))
      return val

   }

   putUserbyEMail(id: string,updateddata: any,httpOptions): Observable<any>
   {
     let urlstring = this.userbyemail_url + "/" + id
     console.log(urlstring)
     let val =  this.http.put(urlstring,updateddata,httpOptions)
     .pipe(
      catchError(this.catcher))
      return val

   }

   deleteUserbyEmail(id: string,httpOptions): Observable<any>
   {
     let urlstring = this.userbyemail_url + "/" + id
     console.log(urlstring)
     let val =  this.http.delete(urlstring,httpOptions)
     .pipe(
      catchError(this.catcher))
      console.log(val)
      return val

   } 


   deleteUserbyId(id: string,httpOptions): Observable<any>
   {
     let urlstring = this.user_url + "/" + id
     console.log(urlstring)
     let val =  this.http.delete(urlstring,httpOptions)
     .pipe(
      catchError(this.catcher))
      console.log(val)
      return val

   }






   


    catcher(error: HttpErrorResponse){
    return throwError(error.message || "Service Error")
 }


}
