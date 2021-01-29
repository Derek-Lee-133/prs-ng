import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { RequestService } from 'src/app/service/request.service';
import { Request } from '../../../model/request.class';
import {LineItemService} from '../../../service/line-items.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  title = "Purchase Request Line Items";
  titleLi= "Lines";
  request: Request = null;
  requestId: number = 0;
  lines: LineItem[] = [];

  constructor(private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // get the id from url
    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
        console.log(this.requestId);
      }
    );
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
