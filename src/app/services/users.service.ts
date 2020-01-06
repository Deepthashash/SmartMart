import {Injectable} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { Users } from './users.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    formData: Users;
    constructor(private firestore:AngularFirestore){}

    getUserDetails(){
        return this.firestore.collection('Users').snapshotChanges();
    }
}