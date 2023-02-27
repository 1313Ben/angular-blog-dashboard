import { Post } from './../models/post';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService
  ) { }

  uploadImage(selectedImage: string, postData: Post) {
    const filePath = `postIMG/${Date.now()}`;
    //console.log(filePath)
    this.storage.upload(filePath, selectedImage).then(() => {
      console.log('post image uploaded successfully');
      
      this.storage.ref(filePath).getDownloadURL().subscribe(URL => {
        //console.log(URL)
        postData.postImgPath = URL;
        // console.log(postData);
        this.saveData(postData);
      })
    })
  }

  saveData(postData: Post) {
     this.afs.collection('posts').add(postData).then(docRef => {
      this.toastr.success('Data insert successfully');
    });
  }
}