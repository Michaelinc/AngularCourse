import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { UserDTO } from '../dto/UserDTO';

@Component({
  selector: 'form-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() recivedUser: UserDTO;
  listUsr: Array<UserDTO> = new Array<UserDTO>();
  @Output() editUser = new EventEmitter<UserDTO>();

  constructor() { }

  ngOnChanges() {
    this.eventTable();
  }
  ngOnInit(): void {

  }

  public eventTable() {
    if (this.recivedUser != undefined || this.recivedUser != null) {
      if(this.recivedUser.id != undefined || this.recivedUser.id != null) {
        this.update(this.recivedUser);
      }else{
        this.recivedUser.id = this.consecutive();
        this.listUsr.push(this.recivedUser);
      }
    }
  }
  public consecutive(): number {
    if (this.listUsr.length == 0) {
      return 1;
    } else {
      return this.listUsr[this.listUsr.length - 1].id + 1;
    }
  }
  public delete(user :UserDTO):void{
    this.listUsr.splice(this.listUsr.indexOf(user),1) 
  }
  public update(user:UserDTO){
    let id = this.listUsr.indexOf(user);
    if(id != -1){
      this.listUsr[id] = user;
    }
  }
  public edit(usr : UserDTO){
    this.editUser.emit(usr);
  }
}
