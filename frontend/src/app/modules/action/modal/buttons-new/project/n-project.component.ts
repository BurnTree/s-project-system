import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-n-project',
  templateUrl: './n-project.component.html',
  styleUrls: ['./n-project.component.css']
})

export class NProjectComponent {

  constructor(public activeRef: BsModalRef) { }
}
