import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { ProductService } from 'src/app/service/product.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../model/request.class';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {

  title = "PurchaseRequestLineItem Create - PR ID:";
  submitBtnTitle = "Create";
  products: Product[] = [];
  lineItem: lineItem = new lineItem();
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
        console.log('Products,this.product')
      },
      err => {
        console.log(err);
      }
    );


    this.request.user = this.sysSvc.loggedInUser;



    // get the id from the url
    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
      });

    // get the request by the request id
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
    // save the lineItem to lines
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as lineItem;
        console.log('Line-Item created', this.lineItem)
        // forward to the product list component
        this.router.navigateByUrl("/request-lines");
      },
      err => {
        console.log(err);
      }
    );

  }


}
