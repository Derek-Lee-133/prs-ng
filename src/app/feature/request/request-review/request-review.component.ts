import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../service/request.service';
import { Request } from '../../../model/request.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  title = "Review List";
  requests: Request[] = [];

  constructor(private requestSvc: RequestService, private sysSvc: SystemService) { }


  ngOnInit(): void {

    console.log('User list - logged in User?', this.sysSvc.loggedInUser)
    // populate list of requests in review
    this.requestSvc.getReview(this.sysSvc.loggedInUser.id).subscribe(
      resp => {
        this.requests = resp as Request[];
        console.log('Requests:',this.requests);
      },
      err => {
        console.log(err);
      }
    );
  }
}


