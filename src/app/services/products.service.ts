import {Injectable} from '@angular/core'
import { Barcode } from './product.module'
import { AngularFirestore } from '@angular/fire/firestore';
import { Feedback } from './feedback.model';
import { Users } from './users.model';
import { PreOrders } from './preOrders.model';
import {OtherUsers} from './sysusers.model'

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    formData: Barcode;
    formFeedback: Feedback;
    formUsers: Users;
    formPre: PreOrders;
    formother: OtherUsers;
    constructor(private firestore:AngularFirestore){}

    getProductDetails(){
        return this.firestore.collection('Barcode_details').snapshotChanges();
    }

    getProduct(){
        return this.firestore.collection('Barcode_details').get();
    }

    getFeedBack(){
        return this.firestore.collection('Rating').snapshotChanges();        
    }

    getUserDetails(){
        return this.firestore.collection('Users').snapshotChanges();
    }

    getsysUserDetails(){
        return this.firestore.collection('OtherUsers', ref => ref.where ('userType', '==' , 0 )).snapshotChanges();
    }

    getpreOrders(){
        return this.firestore.collection('PreOrders', ref => ref.where('pending', '==', true)).snapshotChanges();
    }

    getCompletedPreOrders(){
        return this.firestore.collection('PreOrders', ref => ref.where('pending', '==', false)).snapshotChanges();
    }
}