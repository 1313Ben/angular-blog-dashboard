import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  loadData() {
    return this.afs.collection('subscribers').snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      }))
  }

  deleteData(id: any) {
    this.afs.collection('subscribers').doc(id).delete().then(docRef => {
      this.toastr.success('Data Deleted...');
    })
  }

}
