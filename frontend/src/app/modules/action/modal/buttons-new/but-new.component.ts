import {Component, TemplateRef} from '@angular/core';

import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {NProjectComponent} from './project/n-project.component';
import {NUserComponent} from './user/n-user.component';
import {NTaskComponent} from './task/n-task.component';

@Component({
  selector: 'app-but-new',
  templateUrl: './but-new.component.html',
  styleUrls: ['./but-new.component.css']
})
export class ButNewComponent {

  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService ) {

  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  openNProject() {
    this.modalRef = this.modalService.show(NProjectComponent);
  }
  openNTask() {
    this.modalRef = this.modalService.show(NTaskComponent);
  }
  openNUser() {
    this.modalRef = this.modalService.show(NUserComponent);
  }
}
