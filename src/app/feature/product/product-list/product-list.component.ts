import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import {ProductService} from '../../../service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = "Product List";
  products: Product[] = [];

  constructor(private productSvc:ProductService) { }

  ngOnInit(): void {
   this.productSvc.getAll().subscribe(
    resp => {
      this.products = resp as Product[];
    },
    err =>{
      console.log(err);
    }
  );
  }

}
