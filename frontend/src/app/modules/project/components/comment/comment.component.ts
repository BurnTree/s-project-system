import {Component, Input, TemplateRef} from '@angular/core';
import {Task} from 'src/app/modules/models/task';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {TaskService} from "../../../../services/task.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent {


  @Input()
  public task: Task;

  constructor(private modalService: BsModalService,
              private activeRef: BsModalRef,
              private taskService: TaskService,
              private authService: AuthService) {}

  openModal(template: TemplateRef<any>): void {
    this.activeRef = this.modalService.show(template);
  }
}
