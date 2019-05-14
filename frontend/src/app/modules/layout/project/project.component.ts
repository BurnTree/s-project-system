import {Component, OnInit, TemplateRef} from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";
import { map } from "rxjs/operators";
import {Task} from "../../models/task";
import {Subscription} from "rxjs";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  task: Task;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.taskService.getById(id).subscribe((task: any) => {
        if (task) {
          this.task = task;
        } else {
          console.log(`Task with id '${id}' not found, returning to list`);
          this.gotoList();
        }
      });
    }
  });
  }

  public logoutSubmit(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  gotoList() {
    this.router.navigate(['/']);
  }
}
