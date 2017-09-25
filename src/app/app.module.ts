import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VendorListComponent} from './vendor-list/vendor-list.component';

import { VendorService } from './shared/vendor.service';


@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
