import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from 'src/app/modules/models/task';
import {merge, Observable, Subject, Subscription} from 'rxjs';
import {TaskService} from "../../../../../services/task.service";
import {NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";
import {User} from "../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-n-task',
  templateUrl: './n-task.component.html',
  styleUrls: ['./n-task.component.css']
})

export class NTaskComponent implements OnInit {

  public users: User[] = [];

  public test: string = " ";
  public newTask: Task = new Task();
  private subscriptions: Subscription[] = [];

  constructor(public taskService: TaskService, public userService: UserService, public activeRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      data.forEach((u: User) => this.users.push(u));
    }, (e) => console.log(e))
  }

  public _createNewTask(): void {
    this.newTask.reporter.idUsers = this.newTask.assigne.idUsers;
    this.subscriptions.push(this.taskService.saveTask(this.newTask).subscribe(() => {
      this.newTask = new Task();
    }));
    console.log(this.newTask);
  }

  public searchTask(): void {
    console.log(this.newTask);
  }

  /*public search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.users
        : this.users.filter((v: User) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0,10))
    );
  }*/

  public search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.users.filter(user =>
        user.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1))
    )

  public formatter = (result: any) => result.firstName;

}
