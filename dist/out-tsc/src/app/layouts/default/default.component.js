import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DefaultComponent = class DefaultComponent {
    constructor() {
        this.sideBarOpen = true;
        this.selectedComponent = 1;
    }
    ngOnInit() { }
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
};
DefaultComponent = tslib_1.__decorate([
    Component({
        selector: 'app-default',
        templateUrl: './default.component.html',
        styleUrls: ['./default.component.scss']
    })
], DefaultComponent);
export { DefaultComponent };
//# sourceMappingURL=default.component.js.map