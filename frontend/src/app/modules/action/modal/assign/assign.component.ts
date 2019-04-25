import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from "../../../task/models/task";

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html'
})

export class AssignComponent {
  constructor(public activeRef: BsModalRef) { }
}
