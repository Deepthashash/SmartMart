import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Upload } from 'src/app/services/upload';
let PromotionsDialogComponent = class PromotionsDialogComponent {
    constructor(data, service, firestore, upSvc) {
        this.data = data;
        this.service = service;
        this.firestore = firestore;
        this.upSvc = upSvc;
        this.service.formData = Object.assign({}, data);
    }
    ngOnInit() {
    }
    onUpdate(form) {
        let formdata = form.value;
        console.log(formdata.brand);
        this.firestore.doc('Barcode_details/' + formdata.barcode).update(formdata);
    }
    detectFiles(event) {
        this.selectedFiles = event.target.files;
    }
    uploadSingle() {
        let file = this.selectedFiles.item(0);
        this.currentUpload = new Upload(file);
        this.upSvc.pushUpload(this.currentUpload);
    }
};
PromotionsDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'app-promotions-dialog',
        templateUrl: './promotions-dialog.component.html',
        styleUrls: ['./promotions-dialog.component.scss']
    }),
    tslib_1.__param(0, Inject(MAT_DIALOG_DATA))
], PromotionsDialogComponent);
export { PromotionsDialogComponent };
//# sourceMappingURL=promotions-dialog.component.js.map