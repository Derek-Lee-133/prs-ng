import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { MenuComponent } from './core/menu/menu.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestLinesComponent } from './feature/request/request-lines/request-lines.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    UserListComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestLinesComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    RequestReviewComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
