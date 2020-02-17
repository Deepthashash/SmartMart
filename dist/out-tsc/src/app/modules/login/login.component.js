import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(firestore, service, router, toastr) {
        this.firestore = firestore;
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.loginForm = new FormGroup({
            userName: new FormControl(''),
            password: new FormControl(''),
        });
    }
    ngOnInit() { }
    onLogin(form) {
        this.firestore.collection('OtherUsers', ref => ref.where('userName', '==', form.userName).where('password', '==', form.password)).snapshotChanges().subscribe(actionArray => {
            this.details = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        if (this.details.length > 0) {
            if (this.details[0].userType == 1) {
                this.router.navigateByUrl('dash');
            }
            else {
                this.router.navigateByUrl('preOrder');
            }
        }
        else {
            this.toastr.error("Wrong credentials!");
        }
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map