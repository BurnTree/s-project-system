import {Component, OnInit} from "@angular/core";
import {User} from "../../models/user";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {TaskService} from "../../../services/task.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Task} from '../../models/task';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})

export class CabinetComponent implements OnInit{

  user: User = new User();
  tasks: Task[];
  constructor(
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService ){
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.loadTask();
  }

  public loadTask(){
    this.taskService.getAllByAssignee(this.user.idUsers).subscribe(data => {
      this.tasks = data;
    });
  }
}
