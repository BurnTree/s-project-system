import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-n-task',
  templateUrl: './n-task.component.html',
  styleUrls: ['./n-task.component.css']
})

export class NTaskComponent {

  constructor(public activeRef: BsModalRef) { }
}
