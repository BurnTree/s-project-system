import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent {
  constructor(public activeRef: BsModalRef) { }
}
