import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from 'src/app/modules/task/models/task';
import {Subscription} from 'rxjs';
import {TaskService} from "../../../../../services/task.service";

@Component({
  selector: 'app-n-task',
  templateUrl: './n-task.component.html',
  styleUrls: ['./n-task.component.css']
})

export class NTaskComponent implements OnInit{


  public test: string = " ";
  public newTask: Task = new Task();
  private subscriptions: Subscription[] = [];

  constructor(public taskService: TaskService, public activeRef: BsModalRef) { }

  ngOnInit(): void {
  }

  public _createNewTask():void{
    this.subscriptions.push(this.taskService.saveTask(this.newTask).subscribe(()=>{
    this.newTask = new Task();
    }));
    console.log(this.newTask);
  }

  public valueChange(event):void{
    console.log(event);
  }
}
