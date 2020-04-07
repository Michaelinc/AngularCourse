import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'user-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller1';

  public usr : User[];
  
  constructor(){
    this.usr = [];
    
    let us : User = new User();

    us.id = 1;
    us.username = "User";
    us.password = "Pass";
    us.name = "Michael";
    us.email = "email@utp.edu.com"
    this.usr.push(us);

    let us2 : User = new User();
    us2.id = 2;
    us2.username = "User2";
    us2.password = "Pass2";
    us2.name = "Steven";
    us2.email = "one@utp.edu.com"
    this.usr.push(us2);

  }

}
