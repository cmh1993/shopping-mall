import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// Component
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartComponent } from './component/cart/cart.component';
import { GlobalLoginComponent } from './component/global_login/global_login.component';
import { LoginComponent } from './component/login/login.component';
import { AccountComponent } from './component/account/account.component';
import { ProfileComponent } from './component/profile/profile.component';
import { GoodsComponent } from './component/goods/goods.component';
import { GoodsDetailComponent } from './component/goods_detail/goods_detail.component';

// Service
import { ItemService } from './service/item.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { CategoryService } from './service/category/category.service';
import { GoodsService } from './service/goods/goods.service';
// Observable
import 'rxjs/Rx';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// Directive
import { OnCreate } from './direcctive/oncreate';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'global_login',
    component: GlobalLoginComponent,
  },
  { path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: ':high_category/:low_category',
    component: GoodsComponent,
  },
  {
    path: ':high_category/:low_category/:styleNum',
    component: GoodsDetailComponent,

  },
  { path: 'men',
    component: MenComponent,
  },

  { path: '**',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GlobalLoginComponent,
    AccountComponent,
    ProfileComponent,
    //Goods
    GoodsComponent,
    GoodsDetailComponent,
    // Cart
    ShoppingCartComponent,
    CartComponent,
    // Men's clothing component
    MenComponent,

    OnCreate,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    AuthService,
    ItemService,
    CategoryService,
    GoodsService,

  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
