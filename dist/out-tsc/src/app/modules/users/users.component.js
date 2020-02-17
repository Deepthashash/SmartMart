import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UsersComponent = class UsersComponent {
    constructor() {
        this.component = 0;
        this.name = "Registered Users";
    }
    ngOnInit() { }
    selectComponent(x) {
        this.component = x;
        if (this.component == 0)
            this.name = "Registered Users";
        else
            this.name = "Pending Users";
    }
};
UsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss']
    })
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map