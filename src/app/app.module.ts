import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import { initializeKeycloak } from '../app/utility/app.init';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
      keycloak.init({
          config: {
              url: 'http://localhost:8380/auth',
              realm: 'integration',
              clientId: 'front',
          },
          initOptions: {
              checkLoginIframe: true,
               checkLoginIframeInterval: 25
          },
          loadUserProfileAtStartUp: true
      });
    } 

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductsComponent,
   
    EditComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    KeycloakAngularModule

    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
