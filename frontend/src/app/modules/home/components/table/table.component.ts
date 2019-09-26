import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../../services/task.service";
import {Subscription} from "rxjs";
import {Task} from '../../../models/task';
import {load} from "@angular/core/src/render3";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

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
    private taskService: TaskService,
  private loadingService: Ng4LoadingSpinnerService) {
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
          console.log("tak load");
        }));
  }

  public sortByProject() {
    if (this.sortName != "project") {
      this.direction = "ASC";
      this.sortName = "project";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }


  public sortByTask() {
    if (this.sortName != "idTask") {
      this.direction = "ASC";
      this.sortName = "idTask";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }

  public sortByPriority() {
    if (this.sortName != "priority") {
      this.direction = "ASC";
      this.sortName = "priority";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }

  public sortByStatus() {
    if (this.sortName != "status") {
      this.direction = "ASC";
      this.sortName = "status";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }

  public sortByCreated() {
    if (this.sortName != "createDate") {
      this.direction = "ASC";
      this.sortName = "createDate";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }

  public sortByEstimation() {
    if (this.sortName != "estimation") {
      this.direction = "ASC";
      this.sortName = "estimation";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }

  public sortByDueData() {
    if (this.sortName != "dueData") {
      this.direction = "ASC";
      this.sortName = "dueData";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }

  public sortByAssignee() {
    this.sortName = "assigne";
    if (this.sortName != "assigne") {
      this.direction = "ASC";
      this.sortName = "assigne";
    }
    else{
      if(this.direction == "ASC"){
        this.direction = "DESC";
      }else {
        this.direction = "ASC";
      }
    }
    this.loadTasks(this.ourPage);
  }
}
