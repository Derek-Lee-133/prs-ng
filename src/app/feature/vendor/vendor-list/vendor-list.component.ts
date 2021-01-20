import { Component, OnInit } from '@angular/core';
import {VendorService} from '../../../service/vendor.service';
import {Vendor} from '../../../model/vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  title = "Vendor List";
  vendors: Vendor[] = [];
  constructor(private vendorSvc:VendorService) { }

  ngOnInit(): void {
   // populate list of vendors
   this.vendorSvc.getAll().subscribe(
    resp => {
      this.vendors = resp as Vendor[];
      console.log('Vendors,this.vendor')
    },
    err =>{
      console.log(err);
    }
  );

  }

}
