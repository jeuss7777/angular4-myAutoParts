import { Component, OnInit } from '@angular/core';
import { VendorService } from '../shared/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: any[];

  /*
  imagesFound: boolean = false;

  handleSuccess(data){
    this.imagesFound = true;
    this.vendors = data.hits;
    console.log(data);
  }

  handleError(error){
    console.error(error);
  }
*/
  constructor(private _vendorService : VendorService) { }

  searchVendors(query: string){
    return this._vendorService.getVendor(query).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("Request complete!")
    )
  }

  ngOnInit() {
  }

}
