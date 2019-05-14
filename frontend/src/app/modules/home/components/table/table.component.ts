import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../../services/task.service";
import {Subscription} from "rxjs";
import {Task} from '../../../models/task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  page: number = 1;
  pageSize:number = 10;
  tasks: Task[];
  private subscriptions: Subscription[] = [];

  constructor(
    private taskService: TaskService) {
  }


  ngOnInit() {
    this.taskService.getTask().subscribe(data => {
      this.tasks = data;
    });
  }


  private loadTasks(): void {
    this.subscriptions.push(this.taskService.getTask()
      .subscribe(tsk => {
        this.tasks = tsk as Task[];

      }));
  }
}
