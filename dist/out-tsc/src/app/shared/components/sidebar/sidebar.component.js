import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.childEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    fireEvent(x) {
        this.childEvent.emit(x);
    }
};
tslib_1.__decorate([
    Output()
], SidebarComponent.prototype, "childEvent", void 0);
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map