import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
let RegisteredUsersComponent = class RegisteredUsersComponent {
    constructor(dialog, db, service) {
        this.dialog = dialog;
        this.db = db;
        this.service = service;
        this.dataSource = this.details;
    }
    ngOnInit() {
        this.service.getUserDetails().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                return Object.assign({ email: item.payload.doc.id }, item.payload.doc.data());
            });
        });
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
RegisteredUsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-registered-users',
        templateUrl: './registered-users.component.html',
        styleUrls: ['./registered-users.component.scss']
    })
], RegisteredUsersComponent);
export { RegisteredUsersComponent };
//# sourceMappingURL=registered-users.component.js.map