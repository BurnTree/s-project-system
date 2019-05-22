import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from 'src/app/modules/models/task';
import {Observable, Subscription} from 'rxjs';
import {TaskService} from "../../../../../services/task.service";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, map} from "rxjs/operators";
import {User} from "../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../../models/project";
import {ProjectService} from "../../../../../services/project.service";
import {AuthService} from "../../../../../services/auth.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {enumRole} from "../../../../models/role";


@Component({
  selector: 'app-n-task',
  templateUrl: './n-task.component.html',
  styleUrls: ['./n-task.component.css']
})

export class NTaskComponent implements OnInit {

  public localUser: User = new User();
  public users: User[] = [];
  public projects: Project[] = [];
  public role = enumRole;

  isDisabled = (date: NgbDate) =>
    date > this.date;

  today = new Date();
  date: NgbDate;

  public newTask: Task = new Task();
  private subscriptions: Subscription[] = [];

  taskForm = new FormGroup({
      project: new FormControl('', {validators: [Validators.required,validateProject]}),
      description: new FormControl('', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(30)]}),
      priority: new FormControl('', Validators.required,),
      dueDate: new FormControl('', Validators.required,),
      estimation: new FormControl('', {validators: [Validators.required, Validators.pattern("^[0-9]*$")]}),
      assigned: new FormControl(null, {validators: [Validators.required, validateUser]}),
    }
  );

  constructor(public taskService: TaskService,
              public userService: UserService,
              public projectService: ProjectService,
              public activeRef: BsModalRef,
              public authService: AuthService,
              private loadingService: Ng4LoadingSpinnerService) {
  }

  ngOnInit(): void {
    this.loadingService.show();
    this.localUser = this.authService.getUser();
    this.userService.getAllByRole(this.role.DEVELOPER).subscribe((data: User[]) => {
      data.forEach((user: User) => this.users.push(user));
      this.users.push(this.localUser);
    });

    this.projectService.getAllProject().subscribe((allProject: Project[]) => {
      allProject.forEach((project: Project) => this.projects.push(project));
    });

    this.loadingService.hide();
  }

  public _createNewTask(): void {
    this.loadingService.show();
    const taskValue = this.taskForm.getRawValue();
    let due = taskValue.dueDate;
    this.newTask.dueData = new Date(due.year, due.month, due.day);
    this.newTask.description = taskValue.description;
    this.newTask.priority.idPriority = taskValue.priority;
    this.newTask.estimation = taskValue.estimation;
    this.newTask.assigne = taskValue.assigned;
    this.newTask.project = taskValue.project;
    this.newTask.reporter = this.localUser;
    this.subscriptions.push(this.taskService.saveTask(this.newTask).subscribe(() => {
      this.newTask = new Task();
      console.log("Task created");
      this.activeRef.hide();
    }));
    console.log(this.newTask);
    this.loadingService.hide();
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

  public formatterUser = (result: any) => result.firstName + " " + result.secondName;

  public userName(user: User): string {
    return (user.firstName + " " + user.secondName);
  }
}

export function validateUser(control: AbstractControl) {
  const u: User = control.value;

  if (typeof u === "string") {
    return {validUser: true};
  }
  return null;
}

export function validateProject(control: AbstractControl) {
  const project: Project = control.value;

  if (typeof project === "string") {
    return {validProject: true};
  }
  return null;
}
