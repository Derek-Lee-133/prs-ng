import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {

  title = "LineItem Edit";
  lineItem: LineItem = null;
  lineItemId: number = 0;
  submitBtnTitle = "Save Changes";
  products: Product[] = [];



  constructor(private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      parms => {
        this.lineItemId = parms['id'];
        console.log("lineItemId:", this.lineItemId);
        // get lineItem by id
        this.lineItemSvc.getById(this.lineItemId).subscribe(
          resp => {
            this.lineItem = resp as LineItem;
            console.log('LineItem', this.lineItem);
          },
          err => {
            console.log(err);
          }
        );
      }
    );

    this.productSvc.getAll().subscribe(
      resp => {
        this.products = resp as Product[];
        console.log('Products,this.product')
      },
      err => {
        console.log(err);
      }
    );




  }


  save() {
    // save the lineItem to DB
    this.lineItemSvc.update(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('LineItem updated', this.lineItem)
        // forward to the lineItem list component
        this.router.navigateByUrl("/request-lines/" + this.lineItem.request.id);
      },
      err => {
        console.log(err);
      }
    );
  }
    compProduct(a: Product, b: Product): boolean {
      return a && b && a.id === b.id;
    }
  

}
