import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let DialogComponent = class DialogComponent {
    constructor(data, service, firestore) {
        this.data = data;
        this.service = service;
        this.firestore = firestore;
        this.service.formPre = Object.assign({}, data);
        console.log(service.formPre.totalPrice);
    }
    ngOnInit() {
    }
    accept(id) {
        this.firestore.doc('PreOrders/' + id).update({ "pending": false });
    }
};
DialogComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dialog',
        templateUrl: './dialog.component.html',
        styleUrls: ['./dialog.component.scss']
    }),
    tslib_1.__param(0, Inject(MAT_DIALOG_DATA))
], DialogComponent);
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map