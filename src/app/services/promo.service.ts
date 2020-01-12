
import {Injectable} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { Promo } from './promo.model';

@Injectable({
    providedIn: 'root'
})
export class PromoService{
    formData: Promo;
    constructor(private firestore:AngularFirestore){}

    getPromo(){
        return this.firestore.collection('Barcode_details').snapshotChanges();
    }
}