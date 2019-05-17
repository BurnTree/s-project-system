import {Component, Input} from '@angular/core';
import {Task} from 'src/app/modules/models/task';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent {


  @Input()
  public task: Task;

}
