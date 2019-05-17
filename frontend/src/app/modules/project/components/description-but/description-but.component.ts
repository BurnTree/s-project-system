import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {EditComponent} from "../../../action/modal/project-buttons/edit/edit.component";
import {AssignComponent} from "../../../action/modal/project-buttons/assign/assign.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Task} from "../../../models/task";
import {Subscription} from "rxjs";
import {TaskService} from "../../../../services/task.service";
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../models/user";
import {enumRole} from "../../../models/role";

@Component({
  selector: 'app-des-but',
  templateUrl: './description-but.component.html'
})
export class DescriptionButComponent implements OnInit{

  @Input()
  public task: Task;
  public t: Task = new Task();
  status: number;
  role = enumRole;

  public user: User = new User();
  public isAppEditVisible: boolean = false;
  private modalRef: BsModalRef;
  private subscription: Subscription[] = [];

  constructor(private modalService: BsModalService,
              private taskService: TaskService,
              private authService: AuthService) {}

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
    this.t = this.task;
    this.t.status.idStatus = 2;
    this.taskService.updateTask(this.t).subscribe((data: Task) => {
      console.log(data);
      window.location.reload()
      }
    );
  }

  taskResolve(){
    this.t = this.task;
    this.t.status.idStatus = 3;
    this.taskService.updateTask(this.t).subscribe(
      (data: Task)=>{
        console.log(data);
        window.location.reload()}
      );
  }


  taskReadyForTest(){
    this.t = this.task;
    this.t.status.idStatus = 4;
    this.taskService.updateTask(this.t).subscribe(
      (data: Task) => {
      console.log(data);
      window.location.reload()
    })
  }


  taskClose(){
    this.task.status.idStatus = 5;
    this.task.status.name = "Close";
    this.taskService.updateTask(this.task).subscribe(()=>console.log(this.task));
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.status = this.task.status.idStatus;
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }


  isAssignee(): boolean {
    return this.user.idUsers === this.task.assigne.idUsers;
  }

  isReporter(): boolean{
    return this.user.idUsers === this.task.reporter.idUsers;
  }

  isTester(): boolean{
    return this.user.role.idRole === this.role.TESTER;
  }
  isReporterAndTester():boolean{
    return (this.isReporter() || this.isTester());
  }
  isAssigneeAndReporter(): boolean{
    return (this.isAssignee() || this.isReporter());
  }
}
