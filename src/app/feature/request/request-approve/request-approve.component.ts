import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { LineItemService } from 'src/app/service/line-items.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from '../../../model/request.class';


@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  title = "Purchase Request Approve/Reject";
  titleLi = "lines";
  request: Request = null ;
  requestId: number = 0;
  lines: LineItem[] = [];
  lineItem: LineItem = new LineItem();
  submitBtnTitle = "Save changes";
  

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private lineItemSvc: LineItemService,
    ) { }

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
    // get line-items by request id
    this.lineItemSvc.getAllLineItemsByRequestId(this.requestId).subscribe(
      resp => {
        this.lines = resp as LineItem[];
        console.log('lineItem', this.lines);
      },
      err => {
        console.log(err);
      }
    );
  }
}


