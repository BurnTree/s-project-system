import {Role} from "./role";
import {Sign} from "./sign";

export class User{
  idUsers: number;
  firstName: string;
  name: string;
  secondName: string;
  role: Role;
  sign: Sign;
  constructor(){
    this.role = new Role();
    this.sign = new Sign();
}
}
