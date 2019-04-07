import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-n-user',
  templateUrl: './n-user.component.html',
  styleUrls: ['./n-user.component.css']
})

export class NUserComponent {

  constructor(public activeRef: BsModalRef) { }
}
