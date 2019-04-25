import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from "../../../task/models/task";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent {
  @Input()
  public task: Task;
  constructor(public activeRef: BsModalRef) { }
}
