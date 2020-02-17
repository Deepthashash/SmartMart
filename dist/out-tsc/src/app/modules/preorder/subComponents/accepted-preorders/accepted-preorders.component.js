import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AcceptedPreordersComponent = class AcceptedPreordersComponent {
    constructor(dialog, db, service) {
        this.dialog = dialog;
        this.db = db;
        this.service = service;
        this.dataSource = this.details;
    }
    ngOnInit() {
        this.service.getCompletedPreOrders().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                return Object.assign({ docId: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
    onComplete(id) {
        this.db.doc("PreOrders/" + id).update({ "completed": true });
    }
};
AcceptedPreordersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-accepted-preorders',
        templateUrl: './accepted-preorders.component.html',
        styleUrls: ['./accepted-preorders.component.scss']
    })
], AcceptedPreordersComponent);
export { AcceptedPreordersComponent };
//# sourceMappingURL=accepted-preorders.component.js.map