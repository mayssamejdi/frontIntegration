import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../services/products.service';
import{Products}from '../models/products'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
id_product?:any;
products?:any;
name : any ;
quantity:any;
  constructor(private productService: ProductsService, private router: Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_product = this.router2.snapshot.params.id ; 
    console.log(this.id_product)

     this.productService.getProductById(this.id_product).subscribe((data:Products)=>
{
  this.products=data;
  console.log(this.products)
},
error => {
  console.error(error);
 });  
  }
  edit(){
    this.productService.updateProduct(this.id_product,this.name,this.quantity).subscribe();
    this.router.navigate(['/products/'+this.id_product])
  }

}
