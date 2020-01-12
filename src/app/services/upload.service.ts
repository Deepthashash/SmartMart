import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import {Upload} from './upload'
import * as firebase from 'firebase';
@Injectable({
    providedIn: 'root'
})
export class UploadService {
    // formData: ;
    constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }

    private basePath:string = '/images';
    private uploadTask: firebase.storage.UploadTask;
    
    pushUpload(upload: Upload){
        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(this.basePath+'/'+upload.file.name).put(upload.file);

        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    upload.progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    upload.url = this.uploadTask.snapshot.downloadURL;
                    upload.name = upload.file.name;
                    this.saveFileData(upload);
                }
            )
    }
    //add url to database
    private saveFileData(upload: Upload) {
        this.db.list(this.basePath+'/').push(upload);
      }

      deleteUpload(upload: Upload) {
        this.deleteFileData(upload.$key)
        .then( () => {
          this.deleteFileStorage(upload.name)
        })
        .catch(error => console.log(error))
      }
    
      // Deletes the file details from the realtime db
      private deleteFileData(key: string) {
        return this.db.list(this.basePath+'/').remove(key);
      }
    
      // Firebase files must have unique names in their respective storage dir
      // So the name serves as a unique key
      private deleteFileStorage(name:string) {
        let storageRef = firebase.storage().ref();
        storageRef.child(this.basePath+'/'+name).delete()
      }
    
    
}