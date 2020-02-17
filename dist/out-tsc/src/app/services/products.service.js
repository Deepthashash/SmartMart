import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ProductsService = class ProductsService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getProductDetails() {
        return this.firestore.collection('Barcode_details').snapshotChanges();
    }
    getFeedBack() {
        return this.firestore.collection('Rating').snapshotChanges();
    }
    getUserDetails() {
        return this.firestore.collection('Users').snapshotChanges();
    }
    getpreOrders() {
        return this.firestore.collection('PreOrders', ref => ref.where('pending', '==', true)).snapshotChanges();
    }
    getCompletedPreOrders() {
        return this.firestore.collection('PreOrders', ref => ref.where('pending', '==', false)).snapshotChanges();
    }
};
ProductsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map