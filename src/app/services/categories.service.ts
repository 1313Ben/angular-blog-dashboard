import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore: AngularFirestore) { }

  saveData(categoryData: any) {
    this.fireStore.collection('categories').add(categoryData)
      .then(docRef => {
        console.log(docRef)
      })
    .catch(err => {console.log(err)})
    console.log(categoryData)
  }
}
