import { Component} from '@angular/core';
import { NProjectComponent} from '../modal/project/n-project.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private modalService: NgbModal) {

  }

  modalNProject() {
    const modalRef = this.modalService.open(NProjectComponent, {centered: true});
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
