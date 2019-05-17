import { Component, OnInit } from '@angular/core';
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
  pageSize:number = 3;
  allPages: number[];
  test: string;
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
    this.loadTasks(this.ourPage);
  }


  private loadTasks(page: number): void {
    this.ourPage = page;
    this.subscriptions.push(this.taskService.getPageTask(page-1,this.pageSize)
      .subscribe(
        data=>{
          console.log(data.content);
        this.tasks = data.content as Task[];
        this.totalPages = data.totalPages;
        this.allPages = Array(this.totalPages).fill(null).map((x, i) => i + 1);
      }));
  }
}
