import {Project} from "./project";
import {User} from './user';
import {Priority} from './priority';
import {Status} from './status';

export class Task {
  idTask: number;
  project: Project;
  ticketCode: string;
  description: string;
  priority: Priority;
  status: Status;
  createDate: string;
  dueData: Date;
  updateDate: string;
  resolvedDate: string;
  closedDate: string;
  estimation: number;
  assigne: User;
  reporter: User;
  comments: string;
  history: string;
  constructor(){
    this.status = new Status();
    this.assigne = new User();
    this.reporter = new User();
    this.project = new Project();
    this.priority = new Priority();
  }
}
