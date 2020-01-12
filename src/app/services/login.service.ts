import {Injectable} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { Login } from './login.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    formData: Login;
    constructor(private firestore:AngularFirestore){}

    getUser(){
        return this.firestore.doc('Barcode_details/'+this.formData.id).get();
    }
}