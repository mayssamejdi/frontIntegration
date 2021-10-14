import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import autoTable from 'jspdf-autotable';
import{Products} from '../models/products';
import { ProductsService } from '../services/products.service';
import jsPDF from 'jspdf'
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products?: Products[];
id_cat:any;
name:any
quantity:any
proddispo:any
fileName= 'ExcelSheet.xlsx'; 

  constructor(private productService: ProductsService, private router: Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
this.id_cat=this.router2.snapshot.params.id
console.log(this.id_cat)
    this.productService.getProductById(this.id_cat).subscribe((data:Products[])=>
    {
      this.products=data;
      console.log(this.products)
    },
    error => {
      console.error(error);
     });  
  }

   addProduct(){
     console.log(this.id_cat)
     
    this.productService.addProducts(this.name,this.quantity,this.id_cat).subscribe()
    window.location.reload()
  
  } 
  deleteProduct(id : any){
    this.productService.deleteProduct(id).subscribe()
    window.location.reload()
  
  }
  makePdf(){

    const doc = new jsPDF()
    autoTable(doc, { html: '#product' })
    doc.save('products.pdf')
  
  }
  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('category'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
    goToEdit(id:any){
      this.router.navigate(['/edit_product/'+id])
    }

}
