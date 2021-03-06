import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title = "Product Edit";
  product: Product = null;
  productId: number = 0;
  submitBtnTitle = "Save changes";
  vendors: Vendor[] = [];

  constructor(private productSvc: ProductService,
    private router: Router,
    private vendorSvc: VendorService,
    private route: ActivatedRoute) { }

    ngOnInit(): void {this.route.params.subscribe(
      parms => {
        this.vendorSvc.getAll().subscribe(
          resp => {
            this.vendors = resp as Vendor[];
          },
          err => {
            console.log(err);
          }
        );
        this.productId = parms['id'];
        console.log(this.productId);
      }
    );
    this.productSvc.getById(this.productId).subscribe(
      resp => {
        this.product = resp as Product;
      },
      err => {
        console.log(err);
      }
    );
  }
  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
    save() {
      this.productSvc.create(this.product).subscribe(
        resp => {
          this.product = resp as Product;
          this.router.navigateByUrl("/product-list");
        },
        err => {
          console.log(err);
        }
      );
    }
  }