import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import{authInterceptorProviders} from './helpers/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';






@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductsComponent,
    LoginComponent,
    EditComponent,
    EditProductComponent,
    KeycloakAngularModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
