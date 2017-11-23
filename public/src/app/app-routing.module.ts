import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CreateComponent } from  './create/create.component'
import { DashboardComponent } from  './dashboard/dashboard.component'
import { ShowPollComponent } from  './show-poll/show-poll.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'show/:id', component: ShowPollComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
