import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title = "Vendor Edit";
  vendor: Vendor = null;
  vendorId: number = 0;
  submitBtnTitle = "Save Changes";


  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      parms => {
        this.vendorId = parms['id'];
      }
    );
    this.vendorSvc.getById(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    this.vendorSvc.update(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor updated', this.vendor)
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
