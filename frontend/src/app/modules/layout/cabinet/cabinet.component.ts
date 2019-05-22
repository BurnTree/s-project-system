import {Component, OnInit} from "@angular/core";
import {User} from "../../models/user";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {TaskService} from "../../../services/task.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Task} from '../../models/task';
import {Subscription} from "rxjs";
import {enumRole} from "../../models/role";


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})

export class CabinetComponent implements OnInit{

  user: User = new User();
  assigneeTasks: Task[];
  reporterTask: Task[];
  testingTask: Task[];
  role = enumRole;
  constructor(
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService ){
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if(this.user.role.idRole != this.role.ADMINISTRATOR) this.loadAssigneeTask();
    if(this.user.role.idRole == this.role.PROJECT_MANAGER) this.loadReporterTask();
    if(this.user.role.idRole == this.role.TESTER) this.loadForTestTask();
  }

  public loadAssigneeTask(){
    this.taskService.getAllByAssignee(this.user.idUsers).subscribe(data => {
      this.assigneeTasks = data;
      console.log("assignee task load");
    });
  }

  public loadReporterTask(){
    this.taskService.getAllByReporter(this.user.idUsers).subscribe(data => {
      this.reporterTask = data;
      console.log("reporter task load");
    });
  }

  public loadForTestTask(){
    this.taskService.getOpenForTestTasks().subscribe(data => {
      this.testingTask = data;
      console.log("testing task load");
    });
  }
}
