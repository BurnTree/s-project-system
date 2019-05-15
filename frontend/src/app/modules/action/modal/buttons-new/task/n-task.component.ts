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


@Component({
  selector: 'app-n-task',
  templateUrl: './n-task.component.html',
  styleUrls: ['./n-task.component.css']
})

export class NTaskComponent implements OnInit {

  public users: User[] = [];
  public projects: Project[] = [];

  isDisabled = (date: NgbDate) =>
    date > this.date;

  today = new Date();
  date: NgbDate;
  public test: string = " ";
  public newTask: Task = new Task();
  private subscriptions: Subscription[] = [];

  taskForm = new FormGroup({
      project: new FormControl('', {validators:[Validators.required]}),
      description : new FormControl('', Validators.required, ),
      priority: new FormControl('',Validators.required,  ),
      dueDate: new FormControl('' ,Validators.required, ),
      estimation: new FormControl('',Validators.required),
      assigned: new FormControl('',Validators.required, ),
    }
  );

  constructor(public taskService: TaskService,
              public userService: UserService,
              public projectService: ProjectService,
              public activeRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      data.forEach((user: User) => this.users.push(user));
    });

    this.projectService.getAllProject().subscribe((allProject: Project[]) => {
      allProject.forEach((project: Project) => this.projects.push(project));
    });
  }

  public _createNewTask(): void {
    const taskValue = this.taskForm.getRawValue();
    let due  = taskValue.dueDate;
    this.newTask.dueData = new Date(due.year,due.month,due.day);
    this.newTask.project = taskValue.project;
    this.newTask.description = taskValue.description;
    this.newTask.priority.idPriority = taskValue.priority;
    this.newTask.estimation = taskValue.estimation;
    this.newTask.assigne = taskValue.assigned;
    this.newTask.reporter = this.newTask.assigne;
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
          user.firstName.toLowerCase().indexOf(peaceUser.toLowerCase()) > -1))
    )

  public formatterUser = (result: any) => result.firstName + result.secondName;

}
