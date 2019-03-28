import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html'
})

export class AssignComponent {
  constructor(public activeRef: BsModalRef) { }
}
