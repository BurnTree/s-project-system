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
import {Status} from "../../../models/status";

@Component({
  selector: 'app-des-but',
  templateUrl: './description-but.component.html'
})
export class DescriptionButComponent implements OnInit {

  @Input()
  public task: Task;
  public t: Task = new Task();
  status: number;
  listStatus: Status[] = [];
  role = enumRole;
  public nowData: Date = new Date();

  public user: User = new User();
  public isAppEditVisible: boolean = false;
  private activeRef: BsModalRef;
  private subscription: Subscription[] = [];

  constructor(private modalService: BsModalService,
              private taskService: TaskService,
              private authService: AuthService) {
  }

  taskStart() {
    this.t = this.task;
    this.t.status.idStatus = 2;
    this.t.history += this.addActionInHistory("change status on start");
    this.taskService.updateTask(this.t).subscribe((data: Task) => {
        console.log(data);
        window.location.reload()
      }
    );
  }

  taskResolve() {
    this.t = this.task;
    this.t.status.idStatus = 3;
    this.t.history += this.addActionInHistory("change status on resolve");
    this.taskService.updateTask(this.t).subscribe(
      (data: Task) => {
        console.log(data);
        window.location.reload()
      }
    );
  }

  taskReadyForTest() {
    this.t = this.task;
    this.t.status.idStatus = 4;
    this.t.history += this.addActionInHistory("change status on ready for test");
    this.taskService.updateTask(this.t).subscribe(
      (data: Task) => {
        console.log(data);
        window.location.reload()
      })
  }


  taskClose() {
    this.task.status.idStatus = 5;
    this.task.status.name = "Close";
    this.task.history += this.addActionInHistory("change status on close");
    this.taskService.updateTask(this.task).subscribe(() => console.log(this.task));
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.status = this.task.status.idStatus;
    this.taskService.getAllStatus().subscribe((data: Status[])=>
    this.listStatus = data
    );
  }

  openModal(template: TemplateRef<any>): void {
    this.activeRef = this.modalService.show(template);
  }


  isAssignee(): boolean {
    return this.user.idUsers === this.task.assigne.idUsers;
  }

  isReporter(): boolean {
    return this.user.idUsers === this.task.reporter.idUsers;
  }

  isTester(): boolean {
    return this.user.role.idRole === this.role.TESTER;
  }

  isDev(): boolean {
    return this.user.role.idRole === this.role.DEVELOPER;
  }

  isReporterAndTester(): boolean {
    return (this.isReporter() || this.isTester());
  }

  isAssigneeAndReporter(): boolean {
    return (this.isAssignee() || this.isReporter());
  }

  public changeStatus(stat: number){
    this.t = this.task;
    this.t.status.idStatus = stat+1;
    this.taskService.updateTask(this.t).subscribe(
      (data: Task) => {
        console.log(data);
        window.location.reload()
      })
  }

  public addActionInHistory(action: string):string {
    const history:string = this.nowData.getDate() + "."
      + this.nowData.getDay() + " : "
      + this.nowData.getHours() + " h "
      + this.nowData.getMinutes() + " min : "
      + this.user.firstName + " "
      + this.user.secondName + ": "
      + action + " task\n";
    return history;
  }
}
