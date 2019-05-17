import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder, FormControl} from "@angular/forms";
import {Task} from "../../../../models/task";
import {Subscription} from "rxjs";
import {User} from "../../../../models/user";
import {TaskService} from "../../../../../services/task.service";
import {UserService} from "../../../../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-n-user',
  templateUrl: './n-user.component.html',
  styleUrls: ['./n-user.component.css']
})

export class NUserComponent implements OnInit {

  public test: string = " ";
  public newUser: User = new User();
  private subscriptions: Subscription[] = [];

  constructor(public userService: UserService,
              public activeRef: BsModalRef,
              public http: HttpClient,
              private loadingService: Ng4LoadingSpinnerService) {
  }

  ngOnInit(): void {
  }


  public _createNewUser(): void {
    this.loadingService.show();
    this.subscriptions.push(this.userService.saveUser(this.newUser).subscribe(() => {
      this.newUser = new User();
    }));
    console.log(this.newUser);
    this.loadingService.hide();
  }
}
