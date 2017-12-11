import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Component
import { HomeComponent } from './component/home/home.component';
import { SweatersComponent } from './component/men/clothing/sweaters/sweaters.component';
import { MenComponent } from './component/men/men.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartComponent } from './component/cart/cart.component';
import { GlobalLoginComponent } from './component/global_login/global_login.component';
import { LoginComponent } from './component/login/login.component';
import { AccountComponent } from './component/account/account.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProductComponent } from './component/product/product.component';

// Service
import { ItemService } from './service/item.service';
import { SweatersService } from './service/men/sweaters.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

// Observable
import 'rxjs/Rx';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
  { path: 'men',
    component: MenComponent,
  },
  { path: 'men/clothing/sweaters',
    component: SweatersComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: 'product/:id',
    component: ProductComponent
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
    ProductComponent,
    // Cart
    ShoppingCartComponent,
    CartComponent,
    // Men's clothing component
    MenComponent,
    SweatersComponent,

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
    SweatersService,
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
