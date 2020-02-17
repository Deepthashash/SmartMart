import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let RouteGuardService = class RouteGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('displayName') === next.data.role) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
        }
    }
};
RouteGuardService = tslib_1.__decorate([
    Injectable()
], RouteGuardService);
export { RouteGuardService };
//# sourceMappingURL=route-guard.service.js.map