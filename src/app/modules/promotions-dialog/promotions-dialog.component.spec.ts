import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsDialogComponent } from './promotions-dialog.component';

describe('PromotionsDialogComponent', () => {
  let component: PromotionsDialogComponent;
  let fixture: ComponentFixture<PromotionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
