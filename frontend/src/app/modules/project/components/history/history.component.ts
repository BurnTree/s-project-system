import {Component, Input} from '@angular/core';
import {Task} from "../../../models/task";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  @Input()
  public task: Task;
}

