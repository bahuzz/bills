import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BillService } from '../../services/bill.service';

import { BillsTableComponent } from './bills-table.component';

describe('BillsTableComponent', () => {
  let component: BillsTableComponent;
  let fixture: ComponentFixture<BillsTableComponent>;
  let billService: BillService;
  let spy: jasmine.Spy;
  let mockBills;
  let mockBill;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsTableComponent ],
      providers: [BillService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsTableComponent);
    component = fixture.componentInstance;
    billService = TestBed.inject(BillService);
    mockBills = [
      {id: 1, name: 'Интернет', price: 600, months: [1,6]},
      {id: 2, name: 'Домашний телефон', price: 500, months: [3,5]},
      {id: 3, name: 'Мобильный телефон', price: 300, months: [9]},
      {id: 4, name: 'Фитнес', price: 1000, months: []},
      {id: 5, name: 'Музыка', price: 200, months: []},
    ];
    mockBill = {id: 1, name: 'Интернет', price: 600, months: [1,6]};
    spy = spyOn(billService,'getBills').and.returnValue(of(mockBills));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service', () => {
    component.getBills();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should call service', () => {
    component.getBill(1);
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should call service', () => {
    component.updateMonths(true,2,1);
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should get bills', () => {
    component.getBills();
    expect(component.bills).toEqual(mockBills);
  });

  it('should get bill by id', () => {
    component.getBill(1);
    expect(component.bill).toEqual(mockBill);
  });

  it('should multiply num of months on price', () => {
    expect(component.getBillTotal(3,[1,2,3])).toBe(9);
  });

  it('should return total +/- price', () => {
    expect(component.changeTotal(1000,100,false)).toBe(900);
    expect(component.changeTotal(1000,100,true)).toBe(1100);
  });

  it('should return true if element in array or else if not', () => {
    expect(component.isMonthChecked([1,2,3],2)).toBe(true);
    expect(component.isMonthChecked([1,2,3],5)).toBe(false);
  });

  it('should return sum of all bills totals', () => {
    const bills = [
      {id:1, name:'test', months: [1,3,5],price: 100},
      {id:2, name:'test',months: [],price: 200},
      {id:3, name:'test',months: [1,3],price: 300},
    ];
    expect(component.getTotal(bills,0)).toBe(900);
  });

  it('should change total', () => {
    component.onDelete(1);
    expect(component.total).toBe(1300);
  });

  it('should call service', () => {
    component.onDelete(1);
    expect(spy.calls.any()).toBeTruthy();
  });
});
