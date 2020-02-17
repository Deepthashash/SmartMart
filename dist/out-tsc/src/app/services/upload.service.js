import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
let UploadService = class UploadService {
    // formData: ;
    constructor(firestore, db) {
        this.firestore = firestore;
        this.db = db;
        this.basePath = '/images';
    }
    pushUpload(upload) {
        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(this.basePath + '/' + upload.file.name).put(upload.file);
        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            console.log(error);
        }, () => {
            upload.url = this.uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            this.saveFileData(upload);
        });
    }
    //add url to database
    saveFileData(upload) {
        this.db.list(this.basePath + '/').push(upload);
    }
    deleteUpload(upload) {
        this.deleteFileData(upload.$key)
            .then(() => {
            this.deleteFileStorage(upload.name);
        })
            .catch(error => console.log(error));
    }
    // Deletes the file details from the realtime db
    deleteFileData(key) {
        return this.db.list(this.basePath + '/').remove(key);
    }
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    deleteFileStorage(name) {
        let storageRef = firebase.storage().ref();
        storageRef.child(this.basePath + '/' + name).delete();
    }
};
UploadService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map