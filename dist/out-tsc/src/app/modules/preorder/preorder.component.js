import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { ProductsService } from 'src/app/services/products.service';
let PreorderComponent = class PreorderComponent {
    constructor(dialog, db) {
        this.dialog = dialog;
        this.db = db;
        this.selectedComponent = 1;
    }
    // dataSource = this.details;
    ngOnInit() {
        // this.service.getPreOrders().subscribe(actionArray => {
        //   this.details = actionArray.map(item => {
        //     return{
        //       // barcodeNumber: item.payload.doc.id, 
        //       ...item.payload.doc.data()
        //     } as Preorder;
        //   })
        // })
    }
};
PreorderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-preorder',
        templateUrl: './preorder.component.html',
        styleUrls: ['./preorder.component.scss']
    })
], PreorderComponent);
export { PreorderComponent };
//# sourceMappingURL=preorder.component.js.map