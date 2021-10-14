import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'category',component:CategoryComponent},
  {path: 'products/:id',component: ProductsComponent},
  {path: 'edit/:id',component:EditComponent},
  {path: 'edit_product/:id',component:EditProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
