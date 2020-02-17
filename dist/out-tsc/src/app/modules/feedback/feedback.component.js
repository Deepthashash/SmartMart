import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FeedbackComponent = class FeedbackComponent {
    constructor(dialog, db, service) {
        this.dialog = dialog;
        this.db = db;
        this.service = service;
        this.dataSource = this.details;
    }
    ngOnInit() {
        this.service.getFeedBack().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                return Object.assign({}, item.payload.doc.data());
            });
        });
    }
};
FeedbackComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feedback',
        templateUrl: './feedback.component.html',
        styleUrls: ['./feedback.component.scss']
    })
], FeedbackComponent);
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map