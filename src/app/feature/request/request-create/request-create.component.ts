import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import {Request} from '../../../model/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title = "Request Create";
  request: Request = new Request();
  submitBtnTitle = "Create";
  users: User[] = [];

  constructor(private requestSvc: RequestService,
    private router: Router,
    private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.getAll().subscribe(
      resp => {
        this.users = resp as User[];
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the user to DB
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request created', this.request)
        // forward to the request list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
