import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from "../../../../models/task";
import {User} from "../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import {Observable, Subscription} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {TaskService} from "../../../../../services/task.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html'
})

export class AssignComponent implements OnInit {

  userForm = new FormGroup({
    assigned: new FormControl(null, Validators.required)
  });

  @Input()
  public task: Task;
  public activeRef: BsModalRef;
  public users: User[] = [];
  public newTask: Task = this.task;
  private subscriptions: Subscription[] = [];

  constructor(public userService: UserService,
              public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.userService.getAllByRole(3).subscribe((data: User[]) => {
      data.forEach((u: User) => this.users.push(u));
    }, (e) => console.log(e))
  }


  public assignNewUser(): void {
    const taskValue = this.userForm.getRawValue();
    this.task.assigne = taskValue.assigned;
    this.taskService.updateTask(this.task).subscribe((data: Task) => {
        console.log(data);
      }
    );
  }

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
