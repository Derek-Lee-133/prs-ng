import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { RequestService } from 'src/app/service/request.service';
import { Request } from '../../../model/request.class';
import { LineItemService } from '../../../service/line-items.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  title = "Purchase Request Line Items";
  titleLi = "Lines";
  request: Request = null;
  requestId: number = 0;
  lines: LineItem[] = [];
  lineItem: LineItem = new LineItem();


  constructor(private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
      }
    );
    this.lineItemSvc.getAllLineItemsByRequestId(this.requestId).subscribe(
      resp => {
        this.lines = resp as LineItem[];
      },
      err => {
        console.log(err);
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
  delete(lineItemId: number) {
    this.lineItemSvc.delete(lineItemId).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }
  submitForReview() {
    this.requestSvc.submitForReview(this.request).subscribe(
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


