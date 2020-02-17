import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PromoService = class PromoService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getPromo() {
        return this.firestore.collection('Barcode_details').snapshotChanges();
    }
};
PromoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PromoService);
export { PromoService };
//# sourceMappingURL=promo.service.js.map