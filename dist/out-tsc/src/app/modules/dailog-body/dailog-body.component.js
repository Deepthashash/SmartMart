import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let DailogBodyComponent = class DailogBodyComponent {
    constructor(afs, toastr) {
        this.afs = afs;
        this.toastr = toastr;
        this.productsAddForm = new FormGroup({
            barcode: new FormControl(''),
            productName: new FormControl(''),
            unitPrice: new FormControl(''),
            stock: new FormControl(''),
            reOrderLevel: new FormControl('')
        });
    }
    onClick(formData) {
        this.afs.doc('Barcode_details/' + formData.barcode).set({
            brand: formData.productName,
            price: Number(formData.unitPrice),
            stock: Number(formData.stock),
            reOrderLevel: Number(formData.reOrderLevel)
        }).then(res => {
            console.log('submitted');
        }, err => {
            console.log(err);
        });
        this.toastr.success("Succesfully Submitted!");
    }
    ngOnInit() {
    }
};
DailogBodyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dailog-body',
        templateUrl: './dailog-body.component.html',
        styleUrls: ['./dailog-body.component.scss']
    })
], DailogBodyComponent);
export { DailogBodyComponent };
//# sourceMappingURL=dailog-body.component.js.map