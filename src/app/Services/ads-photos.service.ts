import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { PhotoUpload } from '../Models/photoUpload';

@Injectable({
  providedIn: 'root'
})
export class AdsPhotosService {
  private dbPath = '/photos';
  private photoRef: AngularFirestoreCollection<PhotoUpload>;
  constructor(private db: AngularFirestore,private storage: AngularFireStorage,private db1: AngularFireDatabase) {this.photoRef = db.collection(this.dbPath); }

  pushFileToStorage(fileUpload: PhotoUpload): Observable<number | undefined> {
    const filePath = `${this.dbPath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;         
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  saveFileData(photoUpload: PhotoUpload): any {
    return this.photoRef.add({ ...photoUpload });
  }



}
