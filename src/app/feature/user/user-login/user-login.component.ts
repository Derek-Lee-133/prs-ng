import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = 'Login';
  msg: string = '';
  user: User = new User();

  constructor(private userSvc: UserService,
    private router: Router,
    private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.user.userName = "QLee";
    this.user.passWord = "TOPIA"
  }

  login() {
    this.userSvc.login(this.user).subscribe(
      resp => {
        if (resp == null) {
          this.msg = "Invalid username / pwd combo.";
        }
        else {
          this.user = resp as User;
          this.sysSvc.loggedInUser = this.user;
          console.log("Successful login!", this.sysSvc.loggedInUser);
          this.router.navigateByUrl('/user-list');
        }
      },
      err => {
        console.log("User login error!!!", err);
        this.msg = "Error during login"
      }
    );



  }



}
