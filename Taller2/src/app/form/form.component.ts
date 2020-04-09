import { Component, OnInit, OnChanges } from '@angular/core';
import { UserDTO } from '../dto/UserDTO';

@Component({
  selector: 'form-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,OnChanges {

  constructor() { }

  data : UserDTO;
  change : Boolean = false;
  label : string = 'Save';

  sendUser : UserDTO =  new UserDTO();

  ngOnChanges(){
  }
  ngOnInit(): void {

  }
  sendData(){
    this.data = this.sendUser;
    this.sendUser = new UserDTO();
    this.label = 'Save';
  }

  recivedData($event){
    console.log($event);
    this.sendUser = $event;
    this.label = 'Edit  ';
  }


}
