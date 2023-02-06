import { CategoriesService } from './../services/categories.service';
import { Firestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../models/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryArray: Array<object> | any;
  formCategory: string | any;
  formStatus: string = "Add";

  constructor(private categoryService: CategoriesService) {
  }
  
  ngOnInit(): void {
    this.categoryService.loadData().subscribe( val =>{
      console.log(val);
      this.categoryArray = val;
    })
  }

  onSubmit(categoryform: any) {
    let categoryData: Category = {
      category: categoryform.value.category
    }
    this.categoryService.saveData(categoryData)

    categoryform.reset()
/*     let subCategoryData = {
      subCategory: 'Subcategory1'
    }
    this.fireStore.collection('categories').add(categoryData)
      .then(docRef => {
        console.log(docRef)
        this.fireStore.collection('categories').doc(docRef.id).collection('subcategories')
          .add(subCategoryData).then(docRef2 => {
            console.log(docRef2)
          }).catch(err => { console.log(err) })
        console.log(categoryData)
        
      }).catch(err => { console.log(err) })
    
    console.log(categoryData) */
  }

  onEdit(category: any) {
    this.formCategory = category;
    this.formStatus = "Edit";
    console.log(category);
    
  }
}
