import {NgModule} from '@angular/core';
import {AttachmentComponent} from './components/attachment/attachment.component';
import {DescriptionButComponent} from './components/description-but/description-but.component';
import {DetailsComponent} from './components/details/details.component';
import {DescriptionComponent} from './components/description/description.component';
import {CommentComponent} from './components/comment/comment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {EditComponent} from '../action/modal/edit/edit.component';
import {AssignComponent} from '../action/modal/assign/assign.component';
import {CommonModule} from "@angular/common";




@NgModule({
  declarations: [
    DescriptionButComponent,
    DetailsComponent,
    DescriptionComponent,
    AttachmentComponent,
    CommentComponent,
    EditComponent,
    AssignComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  entryComponents: [
    EditComponent,
    AssignComponent
  ],
  exports: [
    DescriptionButComponent,
    DetailsComponent,
    DescriptionComponent,
    AttachmentComponent,
    CommentComponent
  ]
})
export class ProjectModule { }
