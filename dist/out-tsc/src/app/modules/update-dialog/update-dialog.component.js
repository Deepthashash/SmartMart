import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let UpdateDialogComponent = class UpdateDialogComponent {
    constructor(data, service, firestore) {
        this.data = data;
        this.service = service;
        this.firestore = firestore;
        this.service.formData = Object.assign({}, data);
        // console.log(service.formData.barcodeNumber);
    }
    // productsUpdateForm = new FormGroup({
    //   barcode: new FormControl(''),
    //   productName: new FormControl(''),
    //   unitPrice: new FormControl(''),  
    // });
    ngOnInit() {
    }
    onUpdate(form) {
        let formdata = form.value;
        console.log(formdata.brand);
        this.firestore.doc('Barcode_details/' + formdata.barcode).update(formdata);
    }
};
UpdateDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-dialog',
        templateUrl: './update-dialog.component.html',
        styleUrls: ['./update-dialog.component.scss']
    }),
    tslib_1.__param(0, Inject(MAT_DIALOG_DATA))
], UpdateDialogComponent);
export { UpdateDialogComponent };
//# sourceMappingURL=update-dialog.component.js.map