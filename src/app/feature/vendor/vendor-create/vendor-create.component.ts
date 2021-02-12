import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title = "Vendor Create";
  vendor: Vendor = new Vendor();
  submitBtnTitle = "Create";

  constructor(private vendorSvc: VendorService,
    private router: Router) { }

  ngOnInit(): void {

  }
  save() {
    this.vendorSvc.create(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    );

  }

}
