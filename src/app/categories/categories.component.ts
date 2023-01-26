import { Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private fireStore: AngularFirestore) {
  }

  onSubmit(categoryform: any) {
    let categoryData = {
      category: categoryform.value.category
    }

    this.fireStore.collection('collections').add(categoryData)
      .then(docRef => {
        console.log(docRef)
      })
    .catch(err => {console.log(err)})
    console.log(categoryData)
  }
}
