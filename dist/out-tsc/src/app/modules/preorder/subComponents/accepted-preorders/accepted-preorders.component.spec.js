import { async, TestBed } from '@angular/core/testing';
import { AcceptedPreordersComponent } from './accepted-preorders.component';
describe('AcceptedPreordersComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AcceptedPreordersComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AcceptedPreordersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=accepted-preorders.component.spec.js.map