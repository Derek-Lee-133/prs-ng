import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title = "Product Create";
  product: Product = new Product();
  submitBtnTitle = "Create";
  vendors: Vendor[] = [];

  constructor(private productSvc: ProductService,
    private router: Router,
    private vendorSvc: VendorService
    ) { }

  ngOnInit(): void {

    this.vendorSvc.getAll().subscribe(
      resp => {
        this.vendors = resp as Vendor[];
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the vendor to DB
    this.productSvc.create(this.product).subscribe(
      resp => {
        this.product = resp as Product;
        console.log('Product created', this.product)
        // forward to the product list component
        this.router.navigateByUrl("/product-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}