import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import {Request} from '../../../model/request.class';


@Component({
  selector: 'app-line-item',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  title = "PurchaseRequestLineItem Create - PR ID:";
  submitBtnTitle = "Create";
  products: Product[] = [];
  lineItem: LineItem = new LineItem();
  request: Request = new Request();
  requestId = 0;


  constructor(private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private requestSvc: RequestService) { }

  ngOnInit(): void {

    this.productSvc.getAll().subscribe(
      resp => {
        this.products = resp as Product[];
      },
      err => {
        console.log(err);
      }
    );


    this.request.user = this.sysSvc.loggedInUser;



    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
      });

    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => {
        console.log(err);
      }
    )
  }
  save() {
    this.lineItem.request = this.request;
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('Line-Item created', this.lineItem)
        this.router.navigateByUrl("/request-lines/"+ this.requestId);
      },
      err => {
        console.log(err);
      }
    );

  }


}
