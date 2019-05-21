import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from "../../../../models/task";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {TaskService} from "../../../../../services/task.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit{
  @Input()
  public task: Task;
  @Input()
  public activeRef: BsModalRef;

  isDisabled = (date: NgbDate) =>
    date > this.date;
  today = new Date();
  date: NgbDate;

  taskForm = new FormGroup({
      description : new FormControl('', {validators:[Validators.required, Validators.minLength(4)]}),
      priority: new FormControl('',Validators.required,  ),
      dueDate: new FormControl('' ,Validators.required, ),
      estimation: new FormControl('',{validators:[Validators.required, Validators.pattern("^[0-9]*$")]}),
    }
  );

  constructor(
              public taskService: TaskService) { }


  public _editTask(): void {
    const taskValue = this.taskForm.getRawValue();
    let due  = taskValue.dueDate;
    this.task.dueData = new Date(due.year,due.month,due.day);
    this.task.description = taskValue.description;
    this.task.priority.idPriority = taskValue.priority;
    this.task.estimation = taskValue.estimation;
    this.taskService.updateTask(this.task).subscribe((data: Task) => {
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this.taskForm.controls["description"].setValue(this.task.description);
    this.taskForm.controls["priority"].setValue(this.task.priority.idPriority);
    this.taskForm.controls["dueDate"].setValue(this.task.dueData);
    this.taskForm.controls["estimation"].setValue(this.task.estimation);
  }
}
