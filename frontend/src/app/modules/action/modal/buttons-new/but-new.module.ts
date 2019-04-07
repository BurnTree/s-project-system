import {NgModule} from '@angular/core';
import {NProjectComponent} from './project/n-project.component';
import {NUserComponent} from './user/n-user.component';
import {NTaskComponent} from './task/n-task.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from "../../../../app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    NProjectComponent,
    NUserComponent,
    NTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [
    NProjectComponent,
    NUserComponent,
    NTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class ButNewModule { }
