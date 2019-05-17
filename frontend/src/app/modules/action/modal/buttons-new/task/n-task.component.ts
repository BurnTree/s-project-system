import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from 'src/app/modules/models/task';
import {merge, Observable, Subject, Subscription} from 'rxjs';
import {TaskService} from "../../../../../services/task.service";
import {NgbDate, NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";
import {User} from "../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../../models/project";
import {ProjectService} from "../../../../../services/project.service";
import {AuthService} from "../../../../../services/auth.service";


@Component({
  selector: 'app-n-task',
  templateUrl: './n-task.component.html',
  styleUrls: ['./n-task.component.css']
})

export class NTaskComponent implements OnInit {

  public localUser : User = new User();
  public users: User[] = [];
  public projects: Project[] = [];

  isDisabled = (date: NgbDate) =>
    date > this.date;

  today = new Date();
  date: NgbDate;

  public newTask: Task = new Task();
  private subscriptions: Subscription[] = [];

  taskForm = new FormGroup({
      project: new FormControl('',Validators.required, ),
      description : new FormControl('', {validators:[Validators.required, Validators.minLength(4), Validators.maxLength(30)]}),
      priority: new FormControl('',Validators.required,  ),
      dueDate: new FormControl('' ,Validators.required, ),
      estimation: new FormControl('',{validators:[Validators.required, Validators.pattern("^[0-9]*$")]}),
      assigned: new FormControl(null,Validators.required, ),
    }
  );

  constructor(public taskService: TaskService,
              public userService: UserService,
              public projectService: ProjectService,
              public activeRef: BsModalRef,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      data.forEach((user: User) => this.users.push(user));
    });

    this.projectService.getAllProject().subscribe((allProject: Project[]) => {
      allProject.forEach((project: Project) => this.projects.push(project));
    });

    this.localUser = this.authService.getUser();
  }

  public _createNewTask(): void {
    const taskValue = this.taskForm.getRawValue();
    let due  = taskValue.dueDate;
    this.newTask.dueData = new Date(due.year,due.month,due.day);
    this.newTask.description = taskValue.description;
    this.newTask.priority.idPriority = taskValue.priority;
    this.newTask.estimation = taskValue.estimation;
    this.newTask.assigne = taskValue.assigned;
    this.newTask.project = taskValue.project;
    this.newTask.reporter = this.localUser;
    this.subscriptions.push(this.taskService.saveTask(this.newTask).subscribe(() => {
      console.log("Sucesss");
      this.newTask = new Task();
    }));
    console.log(this.newTask);
  }

  public searchProject = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(peace => peace === '' ? []
        : this.projects.filter(project =>
        project.nameProject.toLowerCase().indexOf(peace.toLowerCase()) > -1))
    )

  public formatterProject = (result: any) => result.nameProject;

  public searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(peaceUser => peaceUser === '' ? []
        : this.users.filter(user =>
          this.userName(user).toLowerCase().indexOf(peaceUser.toLowerCase()) > -1))
    )

  public formatterUser = (result: any) => result.firstName + " "+result.secondName;

  public userName(user: User):string{
    return (user.firstName+ " "+ user.secondName);
  }
}
