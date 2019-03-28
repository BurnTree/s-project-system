import {Component, TemplateRef} from '@angular/core';

import {NProjectComponent} from '../modal/project/n-project.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {NTaskComponent} from '../modal/task/n-task.component';
import {NUserComponent} from '../modal/user/n-user.component';
import {EditComponent} from './modal_project/edit/edit.component';
import {AssignComponent} from './modal_project/assign/assign.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService ) {

  }

  openNProject() {
    this.modalRef = this.modalService.show(NProjectComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    });
  }
  openNTask() {
    this.modalRef = this.modalService.show(NTaskComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    });
  }
  openNUser() {
    this.modalRef = this.modalService.show(NUserComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    });
  }
  openEdit() {
    this.modalRef = this.modalService.show(EditComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    });
  }
  openAssign() {
    this.modalRef = this.modalService.show(AssignComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    });
  }
}
