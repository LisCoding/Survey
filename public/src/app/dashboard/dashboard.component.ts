import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { Router } from "@angular/router";
import { PollApiService } from "./../poll-api.service"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  polls: Array<Poll> = []
  currentUserName = "";
  constructor(private _pollApiService: PollApiService, private _router: Router ) { }

  ngOnInit() {
    this.currentUserName = this._pollApiService.currentUser;
    this.getPolls()
  }

  getPolls(){
    this._pollApiService.getPolls()
    .then(polls => this.polls = polls) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong we can not get Polls!", err))
  }

  //delete Poll
  deletePoll(poll: Poll){
    this._pollApiService.destroy(poll)
    .then(status => this.getPolls()) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong we cant delete!", err))
  }

  //LogOut
  logOut(){
    this._pollApiService.currentUser = ""
    this._router.navigate(["/"])
  }


}
