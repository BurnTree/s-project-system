import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from "../../../models/task";
import {User} from "../../../models/user";
import {UserService} from "../../../../services/user.service";
import {Observable, Subscription} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {TaskService} from "../../../../services/task.service";

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html'
})

export class AssignComponent implements OnInit{

  @Input()
  public task: Task;
  public users: User[] = [];
  public newTask: Task = this.task;
  private subscriptions: Subscription[] = [];

  constructor(public activeRef: BsModalRef,
  public userService: UserService,
              public taskService: TaskService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      data.forEach((u: User) => this.users.push(u));
    }, (e) => console.log(e))
  }


  public assignNewUser(): void {
    this.taskService.updateTask(this.newTask).subscribe((data: Task) => {
        console.log(data);
      }
    );
  }

  public search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.users.filter(user =>
          user.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1))
    )

  public formatter = (result: any) => result.firstName;
}
