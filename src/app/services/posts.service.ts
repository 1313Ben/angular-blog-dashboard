import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(selectedImage: any) {
    const filePath = `postIMG/${Date.now()}`;
    console.log(filePath)
  }
}
