import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DailogBodyComponent } from '../dailog-body/dailog-body.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { PromotionsDialogComponent } from '../promotions-dialog/promotions-dialog.component';
let ProductsComponent = class ProductsComponent {
    constructor(dialog, db, service, toastr) {
        this.dialog = dialog;
        this.db = db;
        this.service = service;
        this.toastr = toastr;
        this.dataSource = this.details;
    }
    ngOnInit() {
        this.service.getProductDetails().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                console.log(this.details);
                return Object.assign({ barcodeNumber: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        // this.statusCheck();
    }
    statusCheck() {
        this.details.forEach(element => {
            if (element.reOrderLevel > element.stock) {
                confirm(element.brand + " is running out of stock");
            }
        });
    }
    openDialog() {
        this.dialog.open(DailogBodyComponent);
    }
    openUpdateDialog(details) {
        // console.log(details);
        this.dialog.open(UpdateDialogComponent, {
            data: details,
        });
    }
    onAddPromo(details) {
        // console.log(details);
        this.dialog.open(PromotionsDialogComponent, {
            data: details,
        });
    }
    onDelete(id) {
        if (confirm("Are you sure, you want to delete this?")) {
            this.db.doc('Barcode_details/' + id).delete();
        }
    }
    search() {
        if (this.brandName != "") {
            this.details = this.details.filter(res => {
                return res.brand.toLocaleLowerCase().match(this.brandName.toLocaleLowerCase());
            });
        }
        else {
            this.ngOnInit();
        }
    }
};
ProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.scss']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map