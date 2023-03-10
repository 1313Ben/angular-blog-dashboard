import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

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

  loadData() {
    return this.fireStore.collection('categories').snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      }))
  }

  updateData(id: any, editData: any) {
    this.fireStore.collection('categories').doc(id).update(editData).then(docRef => {
      this.toastr.success('Data Updated Successfully');
    })
  }

  deleteData(id: any) {
    this.fireStore.collection('categories').doc(id).delete().then(docRef => {
      this.toastr.success('Data Deleted...');
    })
  }
}
