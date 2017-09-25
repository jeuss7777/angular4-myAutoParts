import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VendorService{
  private query: string;
  private URL_API: string = environment.URL_API;

  constructor(private _http: Http){ }


    getVendor(query){
      return this._http.get(this.URL_API + query)
        .map(res => res.json());
    }

}
