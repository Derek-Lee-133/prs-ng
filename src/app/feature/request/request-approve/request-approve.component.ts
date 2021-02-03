import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from '../../../model/request.class';


@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  title = "Purchase Request Approve/Reject";
  request: Request = null ;
  requestId: number = 0;
  submitBtnTitle = "Save changes";
  

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
      });
    // get request by id
    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request', this.request);
      },
      err => {
        console.log(err);
      }
    );
  }
}


