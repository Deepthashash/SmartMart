import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogBodyComponent } from './dailog-body.component';

describe('DailogBodyComponent', () => {
  let component: DailogBodyComponent;
  let fixture: ComponentFixture<DailogBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
