import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../service/request.service';
import { Request } from '../../../model/request.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title = "Request List";
  requests: Request[] = [];

  constructor(private requestSvc: RequestService, private sysSvc: SystemService) { }


  ngOnInit(): void {

    console.log('User list - logged in User?', this.sysSvc.loggedInUser)
    this.requestSvc.getAll().subscribe(
      resp => {
        this.requests = resp as Request[];
      },
      err => {
        console.log(err);
      }
    );
  }
}


