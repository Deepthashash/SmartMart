import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.toggleSideBarForMe = new EventEmitter();
    }
    ngOnInit() { }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib_1.__decorate([
    Output()
], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map