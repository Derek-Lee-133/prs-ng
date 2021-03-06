import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title = "Request Create";
  request: Request = new Request();
  submitBtnTitle = "Create";
  requestId = 0;
  delModes: Array<string> = ["Mail", "PickUp"];


  constructor(private requestSvc: RequestService,
    private router: Router, private sysSvc: SystemService

  ) { }

  ngOnInit(): void {
    this.request.user = this.sysSvc.loggedInUser;
  }

  save() {
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request created', this.request)
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
