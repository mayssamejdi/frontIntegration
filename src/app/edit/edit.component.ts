import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  id_cat:any;
  category?: any;
  id_edit?:any;
  name : any ;
  

  constructor( private categoryService:CategoryService, private router: Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat=this.router2.snapshot.params.id;
console.log(this.id_cat)

this.categoryService.getCategoryById(this.id_cat).subscribe((data:Category)=>
{
  this.category=data;
  console.log(this.category)
},
error => {
  console.error(error);
 });  

  }

edit(){
  console.log(this.name);
  this.categoryService.updateCategory(this.id_cat,this.name).subscribe();
  this.router.navigate(['/category'])
}

}


