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
import {forEach} from "@angular/router/src/utils/collection";
import {isNewline} from "codelyzer/angular/styles/cssLexer";

@Component({
  selector: 'app-n-user',
  templateUrl: './n-user.component.html',
  styleUrls: ['./n-user.component.css']
})

export class NUserComponent implements OnInit {

  public test: string = " ";
  public newUser: User = new User();
  public allUsers: User[] = [];
  private subscriptions: Subscription[] = [];
  public isNewUser:boolean = false;

  constructor(public userService: UserService,
              public activeRef: BsModalRef,
              public http: HttpClient,
              private loadingService: Ng4LoadingSpinnerService) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      data.forEach((user: User) => this.allUsers.push(user));
    });
  }


  public _createNewUser(): void {
    this.loadingService.show();
    this.subscriptions.push(this.userService.saveUser(this.newUser).subscribe(() => {
      this.newUser = new User();
      console.log("Task created");
      this.activeRef.hide();
    }));
    console.log(this.newUser);
    this.loadingService.hide();
  }

  public searchCreatedUser():boolean{
    this.isNewUser = false;
    this.allUsers.forEach((u:User)=> {
      if (this.newUser.sign.login === u.sign.login)
          this.isNewUser = true;
        }
    )
    return this.isNewUser;
  }
}
