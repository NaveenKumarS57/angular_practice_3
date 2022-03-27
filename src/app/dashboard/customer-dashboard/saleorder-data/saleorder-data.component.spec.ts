import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleorderDataComponent } from './saleorder-data.component';

describe('SaleorderDataComponent', () => {
  let component: SaleorderDataComponent;
  let fixture: ComponentFixture<SaleorderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleorderDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleorderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
