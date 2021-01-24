import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../service/request.service';
import {Request} from '../../../model/request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title = "Request List";
  requests: Request[] = [];

  constructor(private requestSvc:RequestService) { }

  ngOnInit(): void {
      // populate list of products
   this.requestSvc.getAll().subscribe(
    resp => {
      this.requests = resp as Request[];
      console.log('Requests,this.request')
    },
    err =>{
      console.log(err);
    }
  );
  }
  }


