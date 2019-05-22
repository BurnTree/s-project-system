import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from "../../../../models/task";
import {User} from "../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import {Observable, Subscription} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {TaskService} from "../../../../../services/task.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../../models/project";
import {enumRole} from "../../../../models/role";

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html'
})

export class AssignComponent implements OnInit {

  userForm = new FormGroup({
    assigned: new FormControl(null, {validators: [Validators.required,validateUser]})
  });

  @Input()
  public task: Task;
  @Input()
  public activeRef: BsModalRef;
  public users: User[] = [];
  public newTask: Task = this.task;
  private subscriptions: Subscription[] = [];
  needRole: number;
  role = enumRole;
  constructor(public userService: UserService,
              public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.needRole = this.role.DEVELOPER;
    if(this.task.status.idStatus == 4)
      this.needRole = this.role.TESTER;
    this.userService.getAllByRole(this.needRole).subscribe((data: User[]) => {
      data.forEach((u: User) => this.users.push(u));
    }, (e) => console.log(e))
  }


  public assignNewUser(): void {
    const taskValue = this.userForm.getRawValue();
    this.task.assigne = taskValue.assigned;
    this.taskService.updateTask(this.task).subscribe((data: Task) => {
        console.log(data);
      console.log("User assignee ");
      this.activeRef.hide();
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

export function validateUser(control: AbstractControl) {
  const u: User = control.value;

  if (typeof u === "string") {
    return {validUser: true};
  }
  return null;
}
