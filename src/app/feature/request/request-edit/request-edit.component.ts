import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import {Request} from '../../../model/request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title = "Request Edit";
  request: Request = null;
  requestId: number = 0;
  submitBtnTitle = "Save changes";
  users: User[] = [];
  constructor(private requestSvc: RequestService,
    private router: Router,
    private userSvc: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {this.route.params.subscribe(
      parms => {
        this.userSvc.getAll().subscribe(
          resp => {
            this.users = resp as User[];
          },
          err => {
            console.log(err);
          }
        );
        this.requestId = parms['id'];
      }
    );
    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => {
        console.log(err);
      }
    );
  }
  compRequest(a: Request, b: Request): boolean {
    return a && b && a.id === b.id;
  }
    save() {
      this.requestSvc.create(this.request).subscribe(
        resp => {
          this.request = resp as Request;
          this.router.navigateByUrl("/request-list");
        },
        err => {
          console.log(err);
        }
      );
    }

}
