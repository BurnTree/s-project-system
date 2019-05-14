import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {EditComponent} from "../../../action/modal/edit/edit.component";
import {AssignComponent} from "../../../action/modal/assign/assign.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Task} from "../../../models/task";
import {Subscription} from "rxjs";
import {TaskService} from "../../../../services/task.service";

@Component({
  selector: 'app-des-but',
  templateUrl: './description-but.component.html'
})
export class DescriptionButComponent implements OnInit{

  @Input()
  public task: Task;

  public isAppEditVisible: boolean = false;
  private modalRef: BsModalRef;
  private subscription: Subscription[] = [];

  constructor(private modalService: BsModalService, private taskService: TaskService ) {}

  openEdit() {
    this.modalRef = this.modalService.show(EditComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
    });
  }

  openAssign() {
    this.isAppEditVisible = true;
    //this.modalRef = this.modalService.show(AssignComponent);
  }

  taskStart(){
    this.task.status.idStatus = 2;
    this.task.status.name = "In progress";
    this.taskService.updateTask(this.task).subscribe((data: Task) => {
      console.log(data);
      }
    );
  }

  taskResolve(){
    this.task.status.idStatus = 3;
    this.taskService.updateTask(this.task).subscribe(
      (data: Task)=>{
      console.log(data);
        this.task.status.name = "Resolve";}
      );
  }


  taskReadyForTest(){
    this.task.status.idStatus = 4;
    this.task.status.name = "Ready for test";
    this.taskService.updateTask(this.task).subscribe(()=>console.log(this.task));
  }


  taskClose(){
    this.task.status.idStatus = 5;
    this.task.status.name = "Close";
    this.taskService.updateTask(this.task).subscribe(()=>console.log(this.task));
  }

  ngOnInit(): void {
  }
  //todo:сломаны модалки
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
