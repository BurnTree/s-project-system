import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {NProjectComponent} from '../modal/project/n-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private modal: NgbModal) {
  }

  modalNProject() {
    const modalRef = this.modal.open(NProjectComponent, {centered: true});
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
