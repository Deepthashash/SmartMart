import {Injectable} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { Login } from './login.model';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    formData: Login;
    constructor(private firestore:AngularFirestore, private router: Router){}

    getUser(){
        return this.firestore.doc('Barcode_details/'+this.formData.id).get();
    }

    logout(){
        this.router.navigateByUrl('login');

    }
}