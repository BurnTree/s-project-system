import {Component, TemplateRef} from '@angular/core';
import { NProjectComponent} from '../modal/project/n-project.component';
import {BsModalService} from 'ngx-bootstrap';
import {BsModalRef} from 'ngx-bootstrap';
import {NTaskComponent} from '../modal/task/n-task.component';
import {NUserComponent} from '../modal/user/n-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService ) {

  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
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
}
