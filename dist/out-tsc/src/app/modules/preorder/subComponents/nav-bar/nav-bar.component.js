import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let NavBarComponent = class NavBarComponent {
    constructor() {
        this.childEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    fireEvent2(x) {
        this.childEvent.emit(x);
    }
};
tslib_1.__decorate([
    Output()
], NavBarComponent.prototype, "childEvent", void 0);
NavBarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.scss']
    })
], NavBarComponent);
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map