import { CategoriesService } from './../services/categories.service';
import { Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private categoryService: CategoriesService) {
  }

  onSubmit(categoryform: any) {
    let categoryData = {
      category: categoryform.value.category
    }
    this.categoryService.saveData(categoryData)


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
}
