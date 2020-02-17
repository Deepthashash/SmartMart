import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
let PendingPreordersComponent = class PendingPreordersComponent {
    constructor(dialog, db, service) {
        this.dialog = dialog;
        this.db = db;
        this.service = service;
    }
    // dataSource = this.details;  
    ngOnInit() {
        this.service.getpreOrders().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                return Object.assign({ docId: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
    onTap(data) {
        // console.log(details);
        this.dialog.open(DialogComponent, {
            data: data,
        });
    }
    onComplete(id) {
        this.db.doc("PreOrders/" + id).update({ "completed": true });
    }
};
PendingPreordersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pending-preorders',
        templateUrl: './pending-preorders.component.html',
        styleUrls: ['./pending-preorders.component.scss']
    })
], PendingPreordersComponent);
export { PendingPreordersComponent };
//# sourceMappingURL=pending-preorders.component.js.map