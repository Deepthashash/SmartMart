import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let LoginService = class LoginService {
    constructor(firestore, router) {
        this.firestore = firestore;
        this.router = router;
    }
    getUser() {
        return this.firestore.doc('Barcode_details/' + this.formData.id).get();
    }
    logout() {
        this.router.navigateByUrl('login');
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map