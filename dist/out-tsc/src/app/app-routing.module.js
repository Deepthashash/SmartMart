import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './modules/login/login.component';
import { PreorderComponent } from './modules/preorder/preorder.component';
const routes = [
    { path: '',
        redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',
        component: LoginComponent },
    { path: 'preOrder',
        component: PreorderComponent, },
    {
        path: 'dash',
        component: DefaultComponent,
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
// export const routingComponents = [LoginComponent]
//# sourceMappingURL=app-routing.module.js.map