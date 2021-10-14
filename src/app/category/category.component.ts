import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import jsPDF from 'jspdf';
import { TokenStorageService } from '../services/token-storage.service';

3
4
 
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import 'jspdf-autotable';

import autoTable from 'jspdf-autotable';

import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category?: Category[];
catName:string = "";
id_cat:any
fileName= 'ExcelSheet.xlsx'; 
tokenStorageService?: TokenStorageService;
 @ViewChild('content',{static: false}) el!: ElementRef;
  data: any;
  

  constructor(private categoryService: CategoryService, private router: Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.router2.snapshot.params.id_cat ; 
   
    this.categoryService.getCategoryList().subscribe((data : Category[])=>
    {
      this.category=data;
      console.log(this.category)
    },
    error => {
      console.error(error);
     });  
  }
  goToProduct(id:any){
    this.router.navigate(['/products/'+id])

  }
addCategory(){
  this.categoryService.addCategory(this.catName).subscribe()
  console.log(this.catName)
 window.location.reload()


}
deleteCategory(id : any){
  this.categoryService.deleteCategory(id).subscribe()
  window.location.reload()

}
makePdf(){

  const doc = new jsPDF()
  autoTable(doc, { html: '#category' })
  doc.save('categories.pdf')

}


open(id:any){
  this.router.navigate(['/edit/'+id])
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

}






