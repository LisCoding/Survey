import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowPollComponent } from './show-poll/show-poll.component';
import { CreateComponent } from './create/create.component'
import { PollApiService } from "./poll-api.service";
import { FilterPipe } from './filter.pipe'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ShowPollComponent,
    CreateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot() // because we imported in the root   
  ],
  providers: [PollApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
