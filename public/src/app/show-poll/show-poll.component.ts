import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { Router } from "@angular/router";
import { PollApiService } from "./../poll-api.service"
import { ActivatedRoute } from '@angular/router'; // to get the id of the url
@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
  currentPoll = new Poll();
  updatedPoll = new Poll();
  pollID = {};
  constructor(private _pollApiService: PollApiService, private _router: Router, private _route: ActivatedRoute) {
  this._route.paramMap.subscribe( params => {
           this.pollID = params.get('id');
           console.log("this is pollID", this.pollID)
      })
  }

  ngOnInit() {
      this.showOne(this.pollID);
  }

  //Show one especific poll
  showOne(poll){
    this._pollApiService.show_poll(poll)
    .then(poll => this.currentPoll = poll) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong we can not get the poll", err))
  }


  //updates votes count for each option
  updateCount(option){
    option.vote_count += 1;
    this.updatedPoll = this.currentPoll;
    this._pollApiService.update(this.updatedPoll)
    .then(status => this.showOne(this.pollID)) // redefining the user array ojbects
    .catch(err=> console.log("something went wrong we cant update !", err))
  }

}
