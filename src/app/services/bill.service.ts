import { Injectable } from '@angular/core';
import { Bills } from '../mock-bills';
import { Bill } from '../interfaces/bill';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bills = Bills;
  bill: Bill;

  constructor() { }

  createBill(name, price) {
    this.bill = {
      id: this.bills.length + 1,
      name: name,
      price: price,
      months: []
    };
    this.bills.push(this.bill);
  }

  getBills():Observable<Bill[]> {
    return of (this.bills)
  }

  getBill(id):Observable<Bill> {
    return of (this.bills.find(item => item.id == id))
  }

  updateBillMonths(checked,id,month) {
    this.bill = this.bills.find(item => item.id == id);
    if(checked) {
      this.bill.months.push(month)
    } else {
      this.bill.months.splice(this.bill.months.indexOf(month),1);
    }
  }

  deleteBill(id:number){
    this.bills = this.bills.filter(item => item.id != id);
  }
}
