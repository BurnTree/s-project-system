import {Component, Input} from '@angular/core';
import {Task} from "../../../models/task";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {

  @Input()
  public task: Task;
}
