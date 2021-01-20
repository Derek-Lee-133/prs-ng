import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service'
import {User} from '../../../model/user.class'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "User List";
  users: User[] = [];
 
constructor(private userSvc:UserService) { }

 ngOnInit(): void {
   // populate list of users
   this.userSvc.getAll().subscribe(
     resp => {
       this.users = resp as User[];
       console.log('Users,this.user')
     },
     err =>{
       console.log(err);
     }
   );

 }
}
