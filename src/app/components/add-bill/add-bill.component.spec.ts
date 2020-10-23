import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillService } from '../../services/bill.service';

import { AddBillComponent } from './add-bill.component';

describe('AddBillComponent', () => {
  let component: AddBillComponent;
  let fixture: ComponentFixture<AddBillComponent>;
  let billService: BillService;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBillComponent ],
      providers: [BillService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillComponent);
    component = fixture.componentInstance;
    billService = TestBed.inject(BillService);
    fixture.detectChanges();
    spy = spyOn(billService,'createBill');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service', () => {
    component.onSubmit();
    expect(spy.calls.any()).toBeTruthy();
  });
});
