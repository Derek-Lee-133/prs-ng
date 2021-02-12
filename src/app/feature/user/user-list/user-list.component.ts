import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service'
import { User } from '../../../model/user.class'
import { SystemService } from '../../../service/system.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "User List";
  users: User[] = [];

  constructor(private userSvc: UserService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    console.log('User list - logged in User?', this.sysSvc.loggedInUser)
    this.userSvc.getAll().subscribe(
      resp => {
        this.users = resp as User[];
        console.log('Users,this.user')
      },
      err => {
        console.log(err);
      }
    );

  }
}
