import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../../services/task.service";
import {Subscription} from "rxjs";
import {Task} from '../../../models/task';
import {load} from "@angular/core/src/render3";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  ourPage: number = 1;
  pageSize: number = 3;
  allPages: number[];
  test: string;
  sortName: string;
  direction: string;
  tasks: Task[];
  totalPages: number;
  private subscriptions: Subscription[] = [];

  constructor(
    private taskService: TaskService) {
  }


  ngOnInit() {
    // this.taskService.getTask().subscribe(data => {
    //   this.tasks = data;
    // });
    this.sortName = "project";
    this.direction = "ASC";
    this.loadTasks(this.ourPage);
  }


  private loadTasks(page: number): void {
    this.ourPage = page;
    this.subscriptions.push(this.taskService.getPageTask(page - 1, this.pageSize, this.sortName, this.direction)
      .subscribe(
        data => {
          console.log(data.content);
          this.tasks = data.content as Task[];
          this.totalPages = data.totalPages;
          this.allPages = Array(this.totalPages).fill(null).map((x, i) => i + 1);
        }));
  }

  public sortByProject() {
    if (this.sortName != "project") {
      this.direction = "ASC";
      this.sortName = "project";
      this.loadTasks(this.ourPage);
    } else {
      if (this.direction == "ASC")
        this.direction = "DESC";
      else
        this.direction = "ASC";
    }
  }


  public sortByTask() {
    this.sortName = "idTask";
    this.loadTasks(this.ourPage);
  }

  public sortByPriority() {
    this.sortName = "priority";
    this.loadTasks(this.ourPage);
  }

  public sortByStatus() {
    this.sortName = "status";
    this.loadTasks(this.ourPage);
  }

  public sortByCreated() {
    this.sortName = "createDate";
    this.loadTasks(this.ourPage);
  }

  public sortByEstimation() {
    this.sortName = "estimation";
    this.loadTasks(this.ourPage);
  }

  public sortByAssignee() {
    this.sortName = "assigne";
    this.loadTasks(this.ourPage);
  }
}
