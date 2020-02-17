import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { PromotionsDialogComponent } from '../promotions-dialog/promotions-dialog.component';
let PromotionsComponent = class PromotionsComponent {
    constructor(dialog, db, service) {
        this.dialog = dialog;
        this.db = db;
        this.service = service;
        this.dataSource = this.details;
    }
    ngOnInit() {
        this.service.getProductDetails().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                return Object.assign({ barcodeNumber: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
    openDialog() {
        this.dialog.open(PromotionsDialogComponent);
    }
    openUpdateDialog(details) {
        // console.log(details);
        this.dialog.open(UpdateDialogComponent, {
            data: details,
        });
    }
    onDelete(id) {
        if (confirm("Are you sure, you want to delete this?")) {
            this.db.doc('Barcode_details/' + id).delete();
        }
    }
};
PromotionsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-promotions',
        templateUrl: './promotions.component.html',
        styleUrls: ['./promotions.component.scss']
    })
], PromotionsComponent);
export { PromotionsComponent };
//# sourceMappingURL=promotions.component.js.map