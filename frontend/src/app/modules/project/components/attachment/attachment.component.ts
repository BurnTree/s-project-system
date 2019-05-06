import {Component, Input} from '@angular/core';
import {Task} from "../../../models/task";
@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html'
})
export class AttachmentComponent {

  @Input()
  public task: Task;
}

