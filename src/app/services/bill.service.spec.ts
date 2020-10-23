import { TestBed } from '@angular/core/testing';
import { BillService } from './bill.service';
import { Bill } from '../interfaces/bill';

describe('BillService', () => {
  let service: BillService;
  let mockBills: Bill[];
  let mockBillsDel: Bill[];
  let mockBill: Bill;
  let newBill;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillService]
    });
    service = TestBed.inject(BillService);
    mockBill = {id: 1, name: 'Интернет', price: 600, months: [1,6]};
    newBill = {id: 6, name: 'test', price: 100, months: []};
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return bills', () => {
    service.getBills().subscribe(result => {
      expect(result.length).toBeGreaterThan(0);
    })
  });

  it('should return bills', () => {
    service.getBill(1).subscribe(result => {
      expect(result).toEqual(mockBill);
    })
  });

  it('should add new bill to bills', () => {
      service.createBill('test',100);
      let res = service.bills.find(item => item.name == 'test');
      expect(res).toEqual(newBill);
  });

  it('should delete bill from bills by id', () => {
    let beforeDel = service.bills.length;
    service.deleteBill(5);
    let afterDel = service.bills.length;
    expect(beforeDel-afterDel).toEqual(1);
});
});
