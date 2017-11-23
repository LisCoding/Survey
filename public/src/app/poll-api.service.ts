import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Poll } from './poll';
import "rxjs";

@Injectable()
export class PollApiService {
  //save current user
  currentUser: string = ""

  constructor(private _http: Http ) { }

  //CRUD OPERATIONS

//create Polls
  create(poll: Poll) {
    return this._http.post("/polls", poll )
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }

//get all the polls
  getPolls(){
    return this._http.get("/polls")
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }

//Delete Poll
  destroy(poll: Poll ){
    return this._http.delete("/polls/" + poll._id, poll)
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }


//update Poll
  update(poll: Poll) {
    return this._http.put("/polls/" + poll._id, poll)
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }

//Show deatils of one poll
  show_poll(poll: Poll){
    console.log("Iam in service", poll)
    return this._http.get("/polls/" + poll)
    .map(data => data.json()) // converting to json
    .toPromise() // making a promise that will get something
  }
}
