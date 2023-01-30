import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore: AngularFirestore, private toastr: ToastrService) { }

  saveData(categoryData: any) {
    this.fireStore.collection('categories').add(categoryData)
      .then(docRef => {
        console.log(docRef);
        this.toastr.success('Data Insert Successfully');
      })
    .catch(err => {console.log(err)})
    console.log(categoryData)
  }
}
